console.log('starting password manager');

var crypto = require('crypto-js')
var storage = require('node-persist');
storage.initSync();

var argv = require('yargs')
	.command('create', 'Create a new account', function (yargs) {
		yargs.options({
			name: {
				demand: true,
				alias: 'n',
				description: 'Account name (eg: Twitter, Facebook)',
				type: 'string'
			},
			username: {
				demand: true,
				alias: 'u',
				description: 'Account username or email',
				type: 'string'
			},
			password: {
				demand: true,
				alias: 'p',
				description: 'Account password',
				type: 'string'
			},
			ConfirmPassword: {
				demand: true,
				alias: 'c',
				description: 'Account Confirm password',
				type: 'string'
			},
			Question: {
				demand: true,
				alias: 'q',
				description: 'Secret Question',
				type: 'string'
			},
			masterPassword:{
				demand:true,
				alias:'m',
				description:'master Key for Encryption decryption',
				type:'string'
			}
		}).help('help');
	})
	.command('get', 'Get an existing account', function (yargs) {
		yargs.options({
			name: {
				demand: true,
				alias: 'n',
				description: 'Account name (eg: Twitter, Facebook)',
				type: 'string'
			},
			masterPassword:{
				demand:true,
				alias:'m',
				description:'master key for description',
				type:'string'
			}
		}).help('help');
	})
	.help('help')
	.argv;
var command = argv._[0];

// create
//     --name
//     --username
//     --password

// get
//     --name

// account.name Facebook
// account.username User12!
// account.password Password123!

function GetAccounts(masterPasword){
	
	console.log('create account called');
	var encryptedAccount =storage.getItemSync('accounts');
	var accounts=[];
	if(typeof(encryptedAccount !== 'undefined')){
		console.log('create account called');
var bytes=crypto.AES.decrypt(encodeURIComponent,masterPasword);
console.log('create account called');
debugger;
accounts = JSON.parse(bytes.toString(crypto.enc.Utf8));
console.log('reate account called');
return accounts;
	}
}
function createAccount (account,masterPassword) {
	console.log('create account called');
	GetAccounts(masterPassword);

	// if (typeof accounts === 'undefined') {
	// 	accounts = [];
	// }

	// accounts.push(account);
	// storage.setItemSync('accounts', accounts);
console.log('create account called');
	saveAccounts(account,masterPassword);
	return account;
}

function getAccount (accountName) {
	var accounts = storage.getItemSync('accounts');
	var matchedAccount;

	accounts.forEach(function (account) {
		if (account.name === accountName) {
			matchedAccount = account;
		}
	});

	return matchedAccount;
}
function saveAccounts(accounts,masterPassword){
var encrypteAccount=crypto.AES.encrypt(JSON.stringify(accounts),masterPassword);
storage.setItemSync(accounts,encrypteAccount.toString())
return accounts;
}

if (command === 'create') {
	try{
var createdAccount = createAccount({
		name: argv.name,
		username: argv.username,
		password: argv.password,
		ConfirmPassword: argv.ConfirmPassword,
		Question: argv.Question
	},argv.masterPassword);
	console.log('Account created!');
	console.log(createdAccount);
	}
	catch(e){
		console.log('unable to create account');
	}
	
} else if (command === 'get') {
	var fetchedAccount = getAccount(argv.name);

	if (typeof fetchedAccount === 'undefined') {
		console.log('Account not found');
	} else {
		console.log('Account found!');
		console.log(fetchedAccount);
	}
}



















