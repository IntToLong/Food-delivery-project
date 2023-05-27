
import './Input.css';

function Input(props) {
	const classes = 'input ' + props.className;
	return (
		<div>
			<label>
				<span className='label-text'>{props.labelText}</span>
				<input
					className={classes}
					type={props.type}
					id={props.id}
					name={props.name}
					placeholder={props.placeholderText}
					onChange={props.handleChange}
					onKeyPress={props.onKeyPress}
					maxLength={props.maxLength}
					value={props.value}
				/>
			</label>
		</div>
	);
}

export default Input;
