/* eslint-disable no-useless-escape */
const version = function() {
	let sys = {}, ua = navigator.userAgent.toLowerCase(), s = null;

	(s = ua.match(/rv:([\d.]+)\) like gecko/)) ? sys.ie = s[1] :
	(s = ua.match(/msie ([\d\.]+)/)) ? sys.ie = s[1] :
	(s = ua.match(/edge\/([\d\.]+)/)) ? sys.edge = s[1] :
	(s = ua.match(/firefox\/([\d\.]+)/)) ? sys.firefox = s[1] :
	(s = ua.match(/(?:opera|opr).([\d\.]+)/)) ? sys.opera = s[1] :
	(s = ua.match(/chrome\/([\d\.]+)/)) ? sys.chrome = s[1] :
	(s = ua.match(/version\/([\d\.]+).*safari/)) ? sys.safari = s[1] : 0;

	return sys;
}
export { version }
