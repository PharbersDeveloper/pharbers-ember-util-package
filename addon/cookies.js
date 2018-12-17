import EmberObject from '@ember/object';
import { inject as service } from '@ember/service';

export default EmberObject.extend({
	cookies: service(),
	read(key) {
		return this.get('cookies').read(key);
	},
	write(key, data, options) {
		this.get('cookies').write(key, data, options);
	},
	cleans(...keys) {
		let that = this;

		return function (option = {}) {
			keys.forEach(key => {
				that.get('cookies').clear(key, option);
			});
		};
	}
});
