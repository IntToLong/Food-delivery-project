import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';

import './Wrapper.css';
function Wrapper() {
	return (
		<div className='wrapper'>
			<Header />
			<Outlet />
		</div>
	);
}

export default Wrapper;
