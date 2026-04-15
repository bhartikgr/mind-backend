const mysql = require('mysql2');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'scribfun',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});


db.getConnection((err, connection) => {
  if (err) {
    console.log('❌ DB Connection Failed:', err.message);
    return;
  }
  console.log('✅ DB Connected Successfully');
  connection.release(); 
});

module.exports = db;