import axios, {AxiosRequestConfig} from "axios";


const instance = axios.create({
    baseURL: 'http://51.158.179.21/api/v1',
});

instance.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        const token = localStorage.getItem('token')
        if(token){
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config
    }
)

export default instance