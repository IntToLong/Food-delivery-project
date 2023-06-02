import { useContext } from 'react';
import { DataContext } from '../../../../Context/DataContext';

import Button from '../../../../common/Button/Button';

import './Shop.css';

function Shop() {
	const { data, selectedShop, setSelectedShop, isDisabled, setCurrentItems } =
		useContext(DataContext);

	const handleShopSelect = (shopName) => {
		setSelectedShop(shopName);
		if (shopName === 'McDonald`s') {
			return setCurrentItems(data[2].menuItems);
		} else if (shopName === 'Ma Pizza') {
			return setCurrentItems(data[1].menuItems);
		} else {
			return setCurrentItems(data[0].menuItems);
		}
	};

	return (
		<div>
			<div>
				<Button
					className={'shop'}
					value={'KFC'}
					onClick={() => handleShopSelect('KFC')}
					disabled={selectedShop === 'KFC' ? false : isDisabled}
				/>
				<Button
					className={'shop'}
					value={'McDonald`s'}
					onClick={() => handleShopSelect('McDonald`s')}
					disabled={selectedShop === 'McDonald`s' ? false : isDisabled}
				/>
				<Button
					className={'shop'}
					value={'Ma Pizza'}
					onClick={() => handleShopSelect('Ma Pizza')}
					disabled={selectedShop === 'Ma Pizza' ? false : isDisabled}
				/>
			</div>
		</div>
	);
}

export default Shop;

