import envConfig from "../../config/envConfig";
import { getNewAccessToken } from "../../services/AuthService";
import axios from "axios";
import { cookies } from "next/headers";

const axiosInstance = axios.create({
  baseURL: envConfig.serverApi,
});

axiosInstance.interceptors.request.use(
  async function (config) {
    const cookieStore = await cookies();
    const seedAccessToken = cookieStore.get("seedAccessToken")?.value;

    if (seedAccessToken) {
      config.headers.Authorization = seedAccessToken;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },

  async function (error) {
    const config = error.config;
    if (error.response) {
      const serverMessage =
        error.response.data?.message || "Something went wrong on the server.";
      return Promise.reject(new Error(serverMessage));
    }

    // if error responsce
    if (error?.response?.status === 401 && !config?.sent) {
      // set the sent flag to true , so that this block of code is not executed again
      config.sent = true;
      const res = await getNewAccessToken();
      const seedAccessToken = res?.data?.seedAccessToken;

      // set the token in authorization header
      config.headers["Authorization"] = seedAccessToken;
      const cookieStore = await cookies();
      cookieStore.set("seedAccessToken", seedAccessToken);

      // retry the request
      return axiosInstance(config);
    } else {
      return Promise.reject(error);
    }
  }
);

export default axiosInstance;
