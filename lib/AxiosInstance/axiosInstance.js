import envConfig from "../../config/envConfig";
import { getAccessToken, removeTokenFromCookie } from "../../utils/token";
import axios from "axios";

const instance = axios.create({
  baseURL: envConfig.serverApi,
  timeout: 50000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Add a request interceptor
instance.interceptors.request.use(
  async (config) => {
    const token = await getAccessToken("barAccessToken");

    if (token) {
      config.headers.Authorization = `${token.value}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      const { status } = error.response;
      // console.log(status);
      if (status === 401 || status === 403) {
        removeTokenFromCookie();
        window.location.href = "/login";
      } else {
        return Promise.reject({
          success: false,
          error: error.response?.data || "Network error",
        });
      }
    }
    return Promise.reject({
      success: false,
      error: error.response?.data || "Network error",
    });
  }
);
export { instance };
