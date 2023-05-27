import { useState, useEffect } from 'react';
import { Audio } from 'react-loader-spinner';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';

import { ShoppingCartProvider } from './Context/ShoppingCartContext';
import { DataProvider } from './Context/DataContext';

import ErrorPage from './ErrorPage/ErrorPage';
import Wrapper from './Wrapper/Wrapper';
import Shops from './components/Shops/Shops.jsx';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';

import './App.css';

function App() {
	const [allShopsData, setAllShopsData] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					'https://nataliatestvs.azurewebsites.net/api/shop'
				);
				setAllShopsData(response.data);
				setLoading(false);
				console.log(allShopsData);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};
		fetchData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (loading) {
		return (
			<div className={'loader'}>
				<Audio
					height='80'
					width='80'
					radius='9'
					color='#016e5a'
					ariaLabel='three-dots-loading'
					wrapperStyle
					wrapperClass
				/>
			</div>
		);
	}

	return (
		<DataProvider>
			<ShoppingCartProvider>
				<Routes>
					<Route path='/' element={<Wrapper />}>
						<Route path='/shop' element={<Shops />} />
						<Route path='/' element={<Shops />} />
						<Route path='/shopping-cart' element={<ShoppingCart />} />
					</Route>
					<Route path='*' element={<ErrorPage />} />
				</Routes>
			</ShoppingCartProvider>
		</DataProvider>
	);
}

export default App;
