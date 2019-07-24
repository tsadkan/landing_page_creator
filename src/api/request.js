import axios from 'axios';
import axiosRetry from 'axios-retry';

const Request = axios.create();

axiosRetry(Request, { retries: 3 });

export default Request;
