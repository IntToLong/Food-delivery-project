import React, { useState, useEffect, createContext } from 'react';
import { Audio } from 'react-loader-spinner';
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
			{loading ? (
				<div className={'loader'}>
					<Audio
						height='80'
						width='80'
						radius='9'
						color='#016e5a'
						ariaLabel='three-dots-loading'
					/>
				</div>
			) : (
				children
			)}
		</DataContext.Provider>
	);
};

export { DataContext, DataProvider };
