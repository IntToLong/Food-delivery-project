import axios from 'axios';
export const fetchShopData = async () => {
	try {
		const response = await axios.get('http://localhost:4000/api/shop');
		console.log(response.data);
		return response.data;
	} catch (error) {
		console.error('Error fetching data:', error);
	}
};

 