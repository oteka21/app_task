const mysql = require('mysql');

const con = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'task_app'
});

module.exports = con;