import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer kMQwUFiTw40D-ioRbtjSlEf4B5-C78nmnskqSXOfPUX3eb5Qxg2E1W6sT5A6Z7aGWQHsdAqQ1GeFVM6KsnHSBTl0UN-PiM5vUNNo8MSgnGM0L7Nxsjk1NSN2Aa9mXnYx'
    }
});

