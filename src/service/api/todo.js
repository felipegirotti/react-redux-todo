import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:8080/todo',
    timeout: 5000
})