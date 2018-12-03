export function numberFormatThousands(number, decimalLength = 0) {
	let p = null,
			zznf = /([-+]?)(\d*)(\.\d+)?/g,
			groups = null,
			mask = null, //符号位
			integers = null, //整数部分
			decimal = '', //小数部分
			remain = null,
			temp = null;

		p = number.toString().replace(/[,，、]/g, '');
		groups = zznf.exec(p.toString());
		mask = groups[1]; //符号位
		integers = (groups[2] || '').split(''); //整数部分
		decimal = groups[3] || ''; //小数部分
		remain = integers.length % 3;

		if (isNaN(p)) {
			return p;
		}

		temp = integers.reduce(function (previousValue, currentValue, index) {
			if (index + 1 === remain || (index + 1 - remain) % 3 === 0) {
				return previousValue + currentValue + ',';
			}
			return previousValue + currentValue;
		}, '').replace(/,$/g, '');

		Number(decimalLength) === 0 ? decimal = Number(decimal) : decimal = Number(decimal).toFixed(decimalLength);
		return mask + temp + decimal;
}
