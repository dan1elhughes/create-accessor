export default path => object =>
	path.split('.').reduce((obj, key) => obj && obj[key], object);
