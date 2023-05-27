import './Button.css';

function Button(props) {
	let classes = 'button ' + props.className;
	return (
		<button
			className={classes}
			onClick={props.onClick}
			type={props.type}
			value={props.value}
			disabled={props.disabled}
		>
			{props.value}
		</button>
	);
}

export default Button;
