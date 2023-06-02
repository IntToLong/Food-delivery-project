import Card from '../../common/Card/Card';
import Input from '../../common/Input/Input';

import './ClientInfo.css';

function ClientInfo({ userData, setUserData }) {
	function handleInputChange(event) {
		const { name, value } = event.target;

		setUserData((prev) => ({
			...prev,
			[name]: value,
		}));
	}
	return (
		<Card className={'clientInfoContainer'}>
			<form id={'userDataForm'}>
				<label htmlFor='userName'>Name: </label>
				<Input
					value={userData.name}
					id={'userName'}
					type='text'
					name={'name'}
					handleChange={(event) => handleInputChange(event)}
				/>
				<label htmlFor='userEmail'>Email: </label>
				<Input
					value={userData.email}
					id={'userEmail'}
					type='email'
					name={'email'}
					handleChange={(event) => handleInputChange(event)}
				/>
				<label htmlFor='userPhone'>Phone: </label>
				<Input
					value={userData.phone}
					id={'userPhone'}
					type='tel'
					name={'phone'}
					handleChange={(event) => handleInputChange(event)}
				/>
				<label htmlFor='userAddress'>Address: </label>
				<Input
					value={userData.address}
					id={'userAddress'}
					type='text'
					name={'address'}
					handleChange={(event) => handleInputChange(event)}
				/>
			</form>
		</Card>
	);
}

export default ClientInfo;
