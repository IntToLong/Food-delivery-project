import './Card.css';

const Card = (props) => {
	const classes = 'card ' + props.className;
	return (
		<div className={classes} data-testid={props.dataTestId}>
			{props.children}
		</div>
	);
};

export default Card;
