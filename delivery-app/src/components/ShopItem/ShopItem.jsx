import { useContext, useEffect } from 'react';

import { ShoppingCartContext } from '../../Context/ShoppingCartContext';

import Card from '../../common/Card/Card';
import Button from '../../common/Button/Button';

import './ShopItem.css';

function ShopItem(props) {
	const { shoppingCart, setShoppingCart } = useContext(ShoppingCartContext);

	useEffect(() => {
		const cartJSON = JSON.stringify(shoppingCart);
		localStorage.setItem('cart', cartJSON);
	}, [shoppingCart]);
	
	function addItemToCart() {
		const existingItem = shoppingCart.find(
			(item) => item.title === props.itemTitle
		);

		if (existingItem) {
			const updatedCart = shoppingCart.map((item) => {
				if (item.title === props.itemTitle) {
					return { ...item, quantity: item.quantity + 1 };
				}
				return item;
			});
			setShoppingCart(updatedCart);
		} else {
			setShoppingCart((prev) => [
				...prev,
				{
					src: props.src,
					title: props.itemTitle,
					price: props.price,
					quantity: 1,
				},
			]);
		}
	}

	return (
		<Card className={'shopItemContainer'}>
			<div className={'shopItem__img'}>
				<img src={props.src} alt={props.alt} />
			</div>
			<p>{props.itemTitle}</p>
			<p>{props.price} $</p>
			<Button value={'Add to cart'} onClick={addItemToCart} />
		</Card>
	);
}

export default ShopItem;
