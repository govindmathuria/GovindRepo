var argv = require('yargs').argv;
var command = argv._[0];

console.log(argv);

if (command === 'hello' && typeof argv.name !== 'undefined' && typeof argv.lastname !== 'undefined' && typeof(argv.city!=='undefined') && typeof(argv.state!=='undefined')&& typeof(argv.country!=='undefined')) {
	console.log('Hello ' + argv.name + ' ' + argv.lastname +' welcome to '+argv.city+' '+argv.state+' '+argv.country+ '!');	
} else if (command === 'hello' && typeof argv.name !== 'undefined' && typeof(argv.city!=='undefined') && typeof(argv.state!=='undefined')) {
	console.log('Hello ' + argv.name + ' ' + argv.lastname +' welcome to second '+argv.city+' '+argv.state+ '!');
} else if (command === 'hello' && typeof argv.name !== 'undefined' && typeof(argv.city!=='undefined')) {
	console.log('Hello ' + argv.name + ' ' + argv.lastname +' welcome to '+argv.city+' !');
}else{
	console.log("hello world !");
}