import axios from "axios";

const api = axios.create({
    baseURL: "/api",
});


api.interceptors.request.use((config) => {
    const accessToken = sessionStorage.getItem('accessToken');
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
  
      // accessToken 만료 오류가 발생했을 경우
      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true; // 무한 루프 방지
  
        // refreshToken을 사용해 새로운 accessToken 요청
        const refreshResponse = await api.post('/auth/refresh');
        sessionStorage.setItem('accessToken', refreshResponse.data.accessToken);
  
        // 새로운 accessToken으로 원래 요청을 다시 시도
        originalRequest.headers.Authorization = `Bearer ${refreshResponse.data.accessToken}`;
        return api(originalRequest);
      }
  
      return Promise.reject(error);
    }
  );

export default api