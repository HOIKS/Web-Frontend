import axios from "axios";
import { useNavigate } from "react-router-dom"; // 리액트 라우터를 사용하는 경우 필요합니다.

const api = axios.create({
  baseURL: "/api",
});

api.interceptors.request.use(
  (config) => {
    const accessToken = sessionStorage.getItem("accessToken");
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401) {
      // Refresh 토큰을 사용해 AccessToken 갱신을 시도하지만 실패할 경우 경고창 표시 및 로그인 페이지로 이동
      if (!originalRequest._retry) {
        originalRequest._retry = true; // 무한 루프 방지

        try {
          const refreshResponse = await api.post("/auth/refresh"
            , {
              email: sessionStorage.getItem("userEmail"),
              refreshToken: sessionStorage.getItem("refreshToken")
            }
          );
          sessionStorage.setItem("accessToken", refreshResponse.data.accessToken);
          
          // 새로운 accessToken으로 원래 요청 다시 시도
          originalRequest.headers["Authorization"] = `Bearer ${refreshResponse.data.accessToken}`;
          return api(originalRequest);
        } catch (refreshError) {
          // 갱신 실패 시 경고창 표시 및 로그인 페이지로 이동
          window.location.href = "/login";
          // window.alert("로그아웃 되었습니다. 다시 로그인해 주세요.");
          return Promise.reject(refreshError);
        }
      }
    }

    return Promise.reject(error);
  }
);

export default api;