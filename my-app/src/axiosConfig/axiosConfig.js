import axios from "axios";
import { remainingMinutes, timeUntilExpiration } from "src/App";

const instance = axios.create({
  baseURL: 'https://studapi.teachmeskills.by/',
  timeout: 5000, 
  // headers: {
  //   'Content-Type': 'application/json',
  // },
});

instance.interceptors.request.use(
  (config) => {
    const tokenStr = localStorage.getItem("token");

    if(tokenStr) {
      const token = JSON.parse(tokenStr);
      config.headers.Authorization = `Bearer ${token.access}`
    }

    return config;
  },
  (error) => Promise.reject(error)
);

let isRefreshing = false; 

instance.interceptors.request.use(
  async (config) => {
    if (remainingMinutes < 2 && !isRefreshing) { 
      isRefreshing = true; 
      try {
        const refreshTok = JSON.parse(localStorage.getItem("token")).refresh;
        const response = await instance.post('/auth/jwt/refresh', { refresh: refreshTok });
        
        const newToken = response.data.access;
        
        const storedToken = JSON.parse(localStorage.getItem("token"));
        storedToken.access = newToken;
        localStorage.setItem("token", JSON.stringify(storedToken));

        config.headers.Authorization = `Bearer ${newToken}`;

        isRefreshing = false; 
      } catch (error) {
        console.error("Error refreshing token:", error);
      }
    }
    
    return config;
  },
  (error) => Promise.reject(error)
);



// instance.interceptors.request.use(
//   async (config) => {
//     //  истек ли срок действия токена
//     if (remainingMinutes<4) {
//       console.log("Токен истек, выполняем обновление");

//       //  refresh token из localStorage
//       const refreshTok = JSON.parse(localStorage.getItem("token")).refresh;
//       console.log(refreshTok);

//       try {
//         const response = await instance.post('/auth/jwt/refresh', { refresh: refreshTok });
        
//         const newToken = response.data.access;
//         console.log(newToken);
//         localStorage.setItem("token", JSON.stringify({access: newToken, refresh: refreshTok}));
//         //  новый access token в заголовке запроса
//         config.headers.Authorization = `Bearer ${newToken}`;
//       } catch (error) {
//         console.error("Ошибка при обновлении токена:", error);
//       }
//     }
    
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

export default instance;