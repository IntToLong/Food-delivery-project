
import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

const DataContext = createContext(null);

const DataProvider = ({ children }) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		try {
			const response = await axios.get(
				'https://nataliatestvs.azurewebsites.net/api/shop'
			);
			setData(response.data);
			setLoading(false);
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	};

	return (
		<DataContext.Provider value={data}>
			{!loading && children}
		</DataContext.Provider>
	);
};

export { DataContext, DataProvider };
