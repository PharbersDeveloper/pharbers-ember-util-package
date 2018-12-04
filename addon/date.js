const dateFormat = function (timestamp, format) {
	let data = new Date(timestamp), result = '';

	var o = {
		"M+": data.getMonth() + 1, //月份
		"D+": data.getDate(), //日
		"h+": data.getHours(), //小时
		"m+": data.getMinutes(), //分
		"s+": data.getSeconds(), //秒
		"q+": Math.floor((data.getMonth() + 3) / 3), //季度
		"S": data.getMilliseconds() //毫秒
	};
	if (/(Y+)/.test(format)) result = format.replace(RegExp.$1, (data.getFullYear() + "").substr(4 - RegExp.$1.length));
	for (var k in o)
		if (new RegExp("(" + k + ")").test(format)) result = result.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
	return result;
}

export {
	dateFormat
}
