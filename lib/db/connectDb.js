const mysql = require('mysql');
const {connectSeting}=require('../globalvar');

con=mysql.createConnection(connectSeting);

function createConnection(){
  con.connect(function(err) {
    if (err) {
      console.log('connect my sql faild1: ', err)
      return;
    }
  console.log('connect to mySql successfoly1')
  });

  con.on('error', function(err) {
    console.log('connect my sql faild11: ', err)
    con.end()
    createConnection()
  });

}
 
// createConnection()


module.exports=con;

