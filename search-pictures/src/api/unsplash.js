import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID fe7748c60eb001a842fd66ac9fe555887fd02c7cc04ccd63f5d83613cb7fdf4f' 
	}
});