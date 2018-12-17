export function initialize(appInstance) {
  appInstance.inject('adapter', 'cookie', 'cookie:main');
}

export default {
  initialize
};
