import axios from 'axios';

const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
})

export const fetchPosts = () => api.get('./posts')
export const fetchUsers = () => api.get('./users')
export const fetchComments = () => api.get('./comments')
