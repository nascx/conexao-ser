import axios from 'axios'


const API = axios.create({ baseURL: 'http://172.25.124.116:5000' });

export const logIn= (formData)=> API.post('/auth/login',formData);

export const signUp = (formData) => API.post('/auth/register', formData);
