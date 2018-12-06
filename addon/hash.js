import EmberObject from '@ember/object';
import MD5 from 'md5.js';

export default EmberObject.extend({
	uuid() {
		function s4() {
			return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
		}
		return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
	},
	md5() {
		return new MD5().update('42').digest('hex')
	}
})
