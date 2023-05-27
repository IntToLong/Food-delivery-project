import { useContext, useState } from 'react';
import { DataContext } from '../../../../Context/DataContext';

import Button from '../../../../common/Button/Button';

import './Shop.css';

function Shop(props) {
	const data = useContext(DataContext);
	const [selectedShop, setSelectedShop] = useState(null);
	const [disabled, setDisabled] = useState(false);

	const handleShopSelect = (shopName) => {
		setSelectedShop(shopName);
		props.setChosen(true);
		setDisabled(true);
		if (shopName === 'McDonald`s') {
			return props.setCurrentItems(data[2].menuItems);
		} else if (shopName === 'Ma Pizza') {
			return props.setCurrentItems(data[1].menuItems);
		} else {
			return props.setCurrentItems(data[0].menuItems);
		}
	};

	return (
		<div>
			<div>
				<Button
					className={'shop'}
					value={'KFC'}
					onClick={() => handleShopSelect('KFC')}
					disabled={selectedShop === 'KFC' ? false : disabled}
				/>
				<Button
					className={'shop'}
					value={'McDonald`s'}
					onClick={() => handleShopSelect('McDonald`s')}
					disabled={selectedShop === 'McDonald`s' ? false : disabled}
				/>
				<Button
					className={'shop'}
					value={'Ma Pizza'}
					onClick={() => handleShopSelect('Ma Pizza')}
					disabled={selectedShop === 'Ma Pizza' ? false : disabled}
				/>
			</div>
		</div>
	);
}

export default Shop;
