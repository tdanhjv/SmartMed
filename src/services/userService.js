import axios from '../axios';
const handleLoginApi = (userUsername, userPassword) => {
    return axios.post('/api/login', { username: userUsername, password: userPassword });
}

const getAllUsers = (inputId) => {
    //template string 
    return axios.get(`/api/get-all-users?id=${inputId}`)
}

export { handleLoginApi, getAllUsers }
