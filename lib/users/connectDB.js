const mysql = require('mysql');
const {connectSeting}=require('./globalVar');

var con;
var timer=10;

function createConnection(){
  con=mysql.createConnection(connectSeting);
  con.connect(function(err) {
    if (err) {
      console.log('connect my sql faild2: ', err)
      setTimeout(createConnection,timer*1000)
      return;
    }
  console.log('connect to mySql successfoly2')
  });

  con.on('error', function(err) {
    console.log('connect my sql faild22: ', err)
      setTimeout(createConnection,timer*1000)
  });

}
createConnection()

module.exports=con;
// .query("SELECT * FROM users", function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//   });

