const mysql = require('mysql');
const {connectSeting}=require('../globalvar');

var con;
var timer=10;
function createConnection(){
  con=mysql.createConnection(connectSeting);
  con.connect(function(err) {
    if (err) {
      console.log('connect my sql faild1: ', err)
      setTimeout(createConnection,timer*1000)
      timer+=10;
      console.log('connect to mysql in (sec) : ', timer)
      return;
    }
  console.log('connect to mySql successfoly1')
  });

  con.on('error', function(err) {
    console.log('connect my sql faild11: ', err)
      setTimeout(createConnection,timer*1000)
      timer+=10;
      console.log('connect to mysql in (sec) : ', timer)
  });

}

createConnection()


module.exports=con;

