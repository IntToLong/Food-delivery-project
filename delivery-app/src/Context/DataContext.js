
import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

import { dataURL } from '../constants';

const DataContext = createContext(null);

const DataProvider = ({ children }) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [selectedShop, setSelectedShop] = useState('');
	const [currentItems, setCurrentItems] = useState([]);
	const [isDisabled, setIsDisabled] = useState(false);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		try {
			const response = await axios.get(dataURL);
			setData(response.data);
			setLoading(false);
			setCurrentItems(response.data[0].menuItems);
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	};

	return (
		<DataContext.Provider
			value={{
				data,
				selectedShop,
				setSelectedShop,
				isDisabled,
				setIsDisabled,
				currentItems,
				setCurrentItems,
			}}
		>
			{!loading && children}
		</DataContext.Provider>
	);
};

export { DataContext, DataProvider };
