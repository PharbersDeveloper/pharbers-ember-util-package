export function groupBy(array, property) {
	return array.reduce(function (acc, obj) {
		let key = obj[property];

		if (!acc[key]) {
			acc[key] = [];
		}
		acc[key].push(obj);
		return acc;
	}, {});
}

export function flat2OneDimensional(array) {
	return array.reduce((pre, val) => pre.concat(Array.isArray(val) ? flat2OneDimensional(val) : val), []);
}

export function flat(array) {
	array.reduce((pre, val) => pre.concat(val), []);
}
