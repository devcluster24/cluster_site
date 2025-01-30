import chalk from "chalk";
import envConfig from "../../config/envConfig";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: envConfig.serverApi,
});

// Request Interceptor
axiosInstance.interceptors.request.use(
  async function (config) {
    try {
      if (typeof window !== "undefined") {
        const devAccessToken = localStorage.getItem("devAccessToken");
        if (devAccessToken) {
          config.headers.Authorization = devAccessToken;
        }
      }

      console.log(
        chalk.bgGreen(chalk.bold(`${envConfig.serverApi}${config.url}`))
      );
    } catch (error) {
      console.error("Error in request interceptor:", error);
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Response Interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    const config = error.config;

    if (error?.response?.status === 401 && !config?.sent) {
      config.sent = true;

      // Import getNewAccessToken dynamically inside interceptor to avoid circular import
      const { getNewAccessToken } = await import("../../services/AuthService");
      const res = await getNewAccessToken();

      if (res?.data?.devAccessToken) {
        config.headers = config.headers || {};
        config.headers["Authorization"] = res.data.devAccessToken;

        if (typeof window !== "undefined") {
          localStorage.setItem("devAccessToken", res.data.devAccessToken);
        }

        return axiosInstance(config); // Retry the request
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
