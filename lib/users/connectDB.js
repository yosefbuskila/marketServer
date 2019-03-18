const mysql = require('mysql');
const {connectSeting}=require('./globalVar');

let con=mysql.createConnection(connectSeting);

function createConnection(){
  con.connect(function(err) {
    if (err) {
      console.log('connect my sql faild2: ', err)
      
    }
  console.log('connect to mySql successfoly2')
  });

  con.on('error', function(err) {
    console.log('connect my sql faild22: ', err)
    con.end()
    createConnection()
  });

}
// createConnection()

module.exports=con;
// .query("SELECT * FROM users", function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//   });

