import axios from 'axios';

var api =axios.create();
api.defaults.baseURL='.......';
api.defaults.headers.common['Authorization'] = `............................`;
export default api;

