const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345678",
  database: "ph_hr_eform",
  charset: "utf-8"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  var sql = "SELECT per_fnamet, per_lnamet, per_telin";
    sql += " FROM personel_muerp";
    sql += " order by convert(per_fnamet using tis620), convert(per_lnamet using tis620)";
  
  con.query(sql, function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});