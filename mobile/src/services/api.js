import axios from 'axios';

const api = axios.create({
  baseURL: 'http://kj-85j.anonymous.mobile.exp.direct:3232'
});

export default api;
