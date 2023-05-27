import Card from '../../common/Card/Card';
import Input from '../../common/Input/Input';

import './ClientInfo.css';

function ClientInfo({ setUserData }) {
	function handleInputChange(event) {
		const { name, value } = event.target;

		setUserData((prev) => ({
			...prev,
			[name]: value,
		}));
	}
	return (
		<Card className={'clientInfoContainer'}>
			<label htmlFor='userName'>Name: </label>
			<Input
				id={'userName'}
				type='text'
				name={'name'}
				handleChange={(event) => handleInputChange(event)}
			/>
			<label htmlFor='userEmail'>Email: </label>
			<Input
				id={'userEmail'}
				type='email'
				name={'email'}
				handleChange={(event) => handleInputChange(event)}
			/>
			<label htmlFor='userPhone'>Phone: </label>
			<Input
				id={'userPhone'}
				type='tel'
				name={'phone'}
				handleChange={(event) => handleInputChange(event)}
			/>
			<label htmlFor='userAddress'>Address: </label>
			<Input
				id={'userAddress'}
				type='text'
				name={'address'}
				handleChange={(event) => handleInputChange(event)}
			/>
		</Card>
	);
}

export default ClientInfo;
