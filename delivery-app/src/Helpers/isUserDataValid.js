export const isUserDataValid = (userData) => {
	for (const key in userData) {
		if (userData[key].trim() === '') {
			return false;
		}
	}
	return true;
};
