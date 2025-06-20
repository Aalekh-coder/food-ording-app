import axios from 'axios';

const axiosInstance = axios.create({
    baseURL :"https://food-ording-app.onrender.com",
});

export default axiosInstance