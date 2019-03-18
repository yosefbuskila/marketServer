const mysql = require('mysql');
const {connectSeting}=require('../globalvar');

let con;
let conObj ={con:undefined};

function createConnection(){
con=mysql.createConnection(connectSeting);

  con.connect(function(err) {
    if (err) {
      console.log('connect my sql faild1: ', err)
      // setTimeout(createConnection,4000)
      return;
    }
  console.log('connect to mySql successfoly1')
  conObj.con=con
  });

  con.on('error', function(err) {
    console.log('connect my sql faild11: ', err)
    setTimeout(createConnection,4000)
  });

}
 
createConnection()


module.exports=conObj;

