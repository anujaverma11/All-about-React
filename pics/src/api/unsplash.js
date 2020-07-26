import axios from 'axios';

console.log(process.env.REACT_APP_AXIOS_API_KEY)

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers:{
        Authorization: 'Client-ID ' + process.env.REACT_APP_AXIOS_API_KEY
      }
});