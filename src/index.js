import { curry } from 'lodash';

export default curry((path, object) =>
	path
		.split('.')
		.reduce(
			(obj, key) => (typeof obj !== 'undefined' ? obj[key] : undefined),
			object
		)
);
