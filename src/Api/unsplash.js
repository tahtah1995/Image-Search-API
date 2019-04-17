import axios from 'axios';

export default axios.create({
baseURL:'https://api.unsplash.com',
    headers:{
        Authorization:  'Client-ID 6ea0c9d46331441db7712439c9aa716b3db45f231f49a7d31dab19e47291a5a5'
    }

});
