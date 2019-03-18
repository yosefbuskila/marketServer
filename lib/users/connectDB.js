const mysql = require('mysql');
const {connectSeting}=require('./globalVar');

let con;
let conObj={con:undefined};

function createConnection(){
  con=mysql.createConnection(connectSeting);
  con.connect(function(err) {
    if (err) {
      console.log('connect my sql faild2: ', err)
      // setTimeout(createConnection,4000)
      return;
    }
  console.log('connect to mySql successfoly2')
  conObj.con=con
  });

  con.on('error', function(err) {
    console.log('connect my sql faild22: ', err)
    setTimeout(createConnection,4000)
  });

}
createConnection()

module.exports=conObj;
// .query("SELECT * FROM users", function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//   });

