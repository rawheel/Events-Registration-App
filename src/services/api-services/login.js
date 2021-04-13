  
import axios from 'axios'

export function loginApi(data) {
  
    return axios.post('http://127.0.0.1:8000/login/',data);
     //return axios.get(`http://127.0.0.1:5000/githubapi/${params}`);
  }