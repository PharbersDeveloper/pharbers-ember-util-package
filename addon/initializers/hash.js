import hash from 'pharbers-ember-util-package/hash';
export function initialize(application) {
	application.register('hash:main', hash);
	application.inject('route', 'hash', 'hash:main');
	application.inject('controller', 'hash', 'hash:main');
	application.inject('component', 'hash', 'hash:main');
	application.inject('service', 'hash', 'hash:main');
}

export default {
	initialize
};
