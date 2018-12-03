import EmberObject from '@ember/object';
import { inject } from '@ember/service';

const cookieReadEmberObject =  EmberObject.extend({
	cookies: inject(),
	read(key) {
		return this.get('cookies').read(key);
	}
});

const cookieWriteEmberObject =  EmberObject.extend({
	cookies: inject(),
	// write(key, data, options) {
	// 	this.get('cookies').write(key, data, options);
	// }
	write(key, data, options) {
		window.console.info(this)
	}


})

const cookieCleanEmberObject =  EmberObject.extend({
	cookies: inject(),
	cleans(...keys) {
		let that = this;

		return function (option = {}) {
			keys.forEach(key => {
				that.get('cookies').clear(key, option);
			});
		};
	}
});


let read = cookieReadEmberObject.create().read;
let write = cookieWriteEmberObject.create().get('write');
let cleans = cookieCleanEmberObject.create().cleans;

export {
	read,
	write,
	cleans
}
