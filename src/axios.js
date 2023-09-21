import axios from "axios";

const instance = axios.create({
    baseURL: 'https://itransition-diplom-forum-node-600c7875a052.herokuapp.com'
})


instance.interceptors.request.use((config) => {
    config.headers.Authorization = window.localStorage.getItem('token')
    return config
}) 

export default instance;