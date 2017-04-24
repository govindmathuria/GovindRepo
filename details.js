var storage= require("node-persist");
storage.initSync();
storage.setItemSync('accounts',[{
    username:'Asreet',balance:100
,
},
{
    username:'Govind',balance:1000
}]);

var accounts=storage.getItemSync('accounts');
accounts.push({username:'Jen',balance:75});

storage.setItemSync('accounts',accounts);
console.log(accounts);