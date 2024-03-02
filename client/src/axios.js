import axios from 'axios';


const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_SERVER_ROUTE || 'http://localhost:3000',  
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use((config) => {
  const { url } = config;
  if (url.startsWith('/a/'))
  {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');
    config.headers.accesstoken = accessToken;
    config.headers.refreshtoken = refreshToken;
  }

  return config;


}
);

instance.interceptors.response.use(
  (res) => 
  {
    if (res.data.newAccessToken)
      localStorage.setItem('accessToken', res.data.newAccessToken);

    return res;
  },
  (err) => { return Promise.reject(err) }
);


export default instance
