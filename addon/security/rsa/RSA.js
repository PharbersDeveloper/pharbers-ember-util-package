import EmberObject from '@ember/object';
import Base from './rsa-base';

const RSAEmberObject = EmberObject.extend(Base, {
	init() {
		this.initInstance();
	},
	publicKey: '',
	privateKey: '',

	/**
	 * 设置key的长度
	 * @param {长度} lenght
	 */
	setDefaultKeySize(lenght) {
		this.initInstance(lenght);
	},

	/**
     * 设置公钥
     * @param {String} publickey
     */
	setPublicKey(publickey) {
		this.set('publicKey',
			this.get('RSAInstance').setPublicKey(publickey)
		);
	},

	/**
     * 设置私钥
     * @param {String} privatekey
     */
	setPrivateKey(privatekey) {
		this.set('privateKey',
			this.get('RSAInstance').setPrivateKey(privatekey)
		);
	},

	/**
     * 内容加密 (短)
     * @param {String} content
     * @returns {String} 密文
     */
	encrypt(content) {
		return this.get('RSAInstance').encrypt(content);
	},

	/**
     * 加密内容（长）
     * @param {String} content
     * @returns {String} 密文
     */
	encryptLong(content) {
		return this.encryptLong2(content);
	},

	/**
     * 内容解密（长）
     * @param {String} encryptContent
     * @returns {String} 解密
     */
	decryptLong(encryptContent) {
		return this.decryptLong2(encryptContent);
	},

	/**
     * 内容解密 (短)
     * @param {String} encryptContent
     * @returns {String} 解密
     */
	decrypt(encryptContent) {
		return this.get('RSAInstance').decrypt(encryptContent);
	}
});

let RSA = RSAEmberObject.create();

export {
	RSA
}
