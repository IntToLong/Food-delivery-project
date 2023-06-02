export function getTotalQuantity(arrOfObjects) {
	return arrOfObjects.reduce(
		(total, currentItem) => total + currentItem.quantity,
		0
	);
}
