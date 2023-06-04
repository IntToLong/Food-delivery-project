import { useState } from 'react';

import { Routes, Route } from 'react-router-dom';

import { ShoppingCartProvider } from './Context/ShoppingCartContext';

import ErrorPage from './ErrorPage/ErrorPage';
import Wrapper from './Wrapper/Wrapper';
import Shops from './components/Shops/Shops.jsx';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';

import './App.css';

function App() {
	const [chosen, setChosen] = useState(false);

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
