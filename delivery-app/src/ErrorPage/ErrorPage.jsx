import ErrorImg from './Error-img.png';
import './ErrorPage.css';

function ErrorPage() {
	return (
		<div className={'error-page'}>
			<img src={ErrorImg} alt='Error' />
		</div>
	);
}

export default ErrorPage;
