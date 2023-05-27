export function getTotalPrice(arrOfObjects) {
	return arrOfObjects.reduce(
		(total, currentItem) => total + currentItem.price * currentItem.quantity,
		0
	);
}
