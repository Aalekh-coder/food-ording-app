import axios from 'axios';

const axiosInstance = axios.create({
    baseURL :"https://food-ording-app.onrender.com",
    // baseURL :"http://localhost:3000",
});

export default axiosInstance