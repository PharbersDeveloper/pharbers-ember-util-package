import cookieObject from 'pharbers-ember-util-package/cookies';

export function initialize(application) {

	application.register('cookie:main', cookieObject);
	application.inject('route', 'cookie', 'cookie:main');
	application.inject('controller', 'cookie', 'cookie:main');
	application.inject('service', 'cookie', 'cookie:main');
	application.inject('adapter', 'cookie', 'cookie:main');
}

export default {
	initialize
};
