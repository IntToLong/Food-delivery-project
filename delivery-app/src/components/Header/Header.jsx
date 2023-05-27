import { Link } from 'react-router-dom';

import './Header.css';

function Header() {
	return (
		<>
			<header className='header'>
				<Link to='/shop'>
					<p>Shop</p>
				</Link>
				<div className='line'></div>
				<Link to='/shopping-cart'>
					<p>Shopping Cart</p>
				</Link>
			</header>
		</>
	);
}

export default Header;
