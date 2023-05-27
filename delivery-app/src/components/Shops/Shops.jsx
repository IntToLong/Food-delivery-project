import { useState, useEffect, useContext } from 'react';
import uuid from 'react-uuid';

import { DataContext } from '../../Context/DataContext';

import Card from '../../common/Card/Card';
import Shop from './components/Shop/Shop';
import ShopItem from '../ShopItem/ShopItem';
import Lovo from './components/Lovo/Lovo';

import './Shops.css';

function Shops(props) {
	const data = useContext(DataContext);

	const [currentItems, setCurrentItems] = useState(data[0].menuItems);
	const [chosen, setChosen] = useState(false);

	useEffect(() => {}, [currentItems]);

	let shopItems = currentItems.map((el) => {
		return (
			<ShopItem
				key={uuid()}
				src={el.src}
				alt={el.alt}
				itemTitle={el.title}
				price={el.price}
			/>
		);
	});

	return (
		<main className={'main'}>
			<Card className={'shopsContainer'}>
				<p className='shopsHeader'>Shops: </p>
				<div className={'shops'}>
					<Shop setCurrentItems={setCurrentItems} setChosen={setChosen}/>
				</div>
			</Card>
			<Card className={'shopItemsContainer'}>
				{chosen ? <div className={'shop-items'}>{shopItems}</div> : <Lovo />}
			</Card>
		</main>
	);
}

export default Shops;
