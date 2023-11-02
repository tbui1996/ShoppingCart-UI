import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: `something`
});

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) =>
    Promise.reject(
        (error.response && error.response.data) || 'uh oh'
    )
)

export default axiosInstance