import { useEffect, useContext } from 'react';
import uuid from 'react-uuid';

import { DataContext } from '../../Context/DataContext';
import { ShoppingCartContext } from '../../Context/ShoppingCartContext';

import Card from '../../common/Card/Card';
import Shop from './components/Shop/Shop';
import ShopItem from '../ShopItem/ShopItem';
import Lovo from './components/Lovo/Lovo';

import './Shops.css';

function Shops() {
	const { selectedShop, currentItems, setIsDisabled } = useContext(DataContext);
	const { shoppingCart } = useContext(ShoppingCartContext);
	
	useEffect(() => {}, [currentItems]);

	useEffect(() => {
		if (shoppingCart.length === 0) {
			setIsDisabled(false);
		}
	}, [shoppingCart, setIsDisabled]);

	let shopItems = currentItems.map((el) => {
		return (
			<ShopItem
				key={uuid()}
				src={el.src}
				alt={el.alt}
				itemTitle={el.title}
				price={el.price}
				currentItems={currentItems}
			/>
		);
	});

	return (
		<main className={'main'}>
			<Card className={'shopsContainer'}>
				<p className='shopsHeader'>Shops: </p>
				<div className={'shops'}>{<Shop />}</div>
			</Card>
			<Card className={'shopItemsContainer'}>
				{selectedShop ? (
					<div className={'shop-items'}>{shopItems}</div>
				) : (
					<Lovo />
				)}
			</Card>
		</main>
	);
}

export default Shops;
