import Controller from '@ember/controller';
import { RSA } from 'pharbers-ember-util-package/security/rsa/RSA';
import { groupBy, flat2OneDimensional, flat } from 'pharbers-ember-util-package/array';
import { numberFormatThousands } from 'pharbers-ember-util-package/number';
import { dateFormat } from 'pharbers-ember-util-package/date';


export default Controller.extend({
	init() {
		this._super(...arguments);
		this.JSRSA()
	},
	actions: {
	},
	JSRSA() {
		// console.info(RSA)

		// console.info(groupBy)
		// console.info(flat2OneDimensional)
		// console.info(flat)
		// console.info(numberFormatThousands)

		// this.get('cookie').write('hi', '123')

		// let time = dateFormat(new Date(), 'YYYY-MM-DD hh:mm:ss')
		// console.info(time)

		// // RSA.setDefaultKeySize(1024)
		// let PublicKey = ``
		// let PrivateKey = ``

		// RSA.setPublicKey(PublicKey)

		// // const params = {
		// //     'cash_amount_to':1,
		// //     'pick_all': 'false',
		// //     'withdraw_type':'CHANNEL_EMONEY',
		// //     'third_account_channel': '大萨达撒撒',
		// //     'third_account': '15900000000',
		// //     'third_account_name':'name',
		// //     'client_ip':'127.0.0.1',
		// //     'password':'ed40beecde2036df41a6a7c907fee1'
		// // };
		// // let encryptString = RSA.encryptLong(JSON.stringify(params));

		// let encryptString = RSA.encryptLong("富强、民主、文明、和谐、自由、平等、公正、法治、爱国、敬业、诚信、友善,{111},\ndasdasdkjnfdsljk\ndasda\t");
		// // let encryptString = RSA.encrypt("富强、民主、文明");
		// console.log(encryptString);

		// RSA.setPrivateKey(PrivateKey);
		// let uncrypted = RSA.decryptLong(encryptString)
		// console.log(uncrypted);
	}
});
