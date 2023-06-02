import { useContext, useState } from 'react';
import { Audio } from 'react-loader-spinner';
import { Routes, Route } from 'react-router-dom';

import { ShoppingCartProvider } from './Context/ShoppingCartContext';
import { DataContext } from './Context/DataContext';

import ErrorPage from './ErrorPage/ErrorPage';
import Wrapper from './Wrapper/Wrapper';
import Shops from './components/Shops/Shops.jsx';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';

import './App.css';

function App() {
	const {data} = useContext(DataContext);
	const [chosen, setChosen] = useState(false);
	if (data.length === 0) {
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
		<ShoppingCartProvider>
			<Routes>
				<Route path='/' element={<Wrapper />}>
					<Route
						path='/shop'
						element={<Shops chosen={chosen} setChosen={setChosen} />}
					/>
					<Route path='/' element={<Shops />} />
					<Route path='/shopping-cart' element={<ShoppingCart />} />
				</Route>
				<Route path='*' element={<ErrorPage />} />
			</Routes>
		</ShoppingCartProvider>
	);
}

export default App;
