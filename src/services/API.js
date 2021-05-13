import axios from "axios";

const options = {
    baseURL: 'https://jsonplaceholder.typicode.com',
}
let axiosInstance = axios.create(options);

const getUsers = () => {
    return axiosInstance.get('/users')
}
export {getUsers}

const getPosts = () => {
    return axiosInstance.get('/posts')
}
export {getPosts}

const getComments = () => {
    return axiosInstance.get('/comments')
}
export {getComments}