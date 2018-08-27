import axios from 'axios';

const instance = axios.create ({
    baseURL:'https://my-pizza-bab20.firebaseio.com/'
});


export default instance;
