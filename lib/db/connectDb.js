const mysql = require('mysql');
const {connectSeting}=require('../globalvar');

var con = mysql.createConnection(connectSeting);

con.connect(function(err) {
  if (err) throw err;
// console.log('ddd')
});

module.exports=con;

