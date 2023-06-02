import { Link } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { ShoppingCartContext } from '../../Context/ShoppingCartContext';
import { getTotalQuantity } from '../../Helpers/getTotalQuantity';

import './Header.css';

function Header() {
	let { itemQuantity, setItemQuantity, shoppingCart } =
		useContext(ShoppingCartContext);
	useEffect(() => {
		setItemQuantity(getTotalQuantity(shoppingCart));
	}, [setItemQuantity, shoppingCart]);

	return (
		<>
			<header className='header'>
				<Link to='/shop'>
					<p>Shop</p>
				</Link>
				<div className='header_line'></div>
				<div>
					<Link to='/shopping-cart'>
						<p className='header_cart'>Shopping Cart</p>
					</Link>
				</div>
				<div
					className={
						itemQuantity > 0
							? 'header_item-quantity'
							: 'header_item-quantity__invisible'
					}
				>
					<div>{itemQuantity}</div>
				</div>
			</header>
		</>
	);
}

export default Header;
