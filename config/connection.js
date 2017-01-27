var mysql = require('mysql');

// var connection = mysql.createConnection({
// 	host: 'localhost',
// 	user: 'root',
// 	password: '',
// 	database: 'burgers_db'
// })

var connection = mysql.createConnection({
    host: 'wp433upk59nnhpoh.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'rrzo5uvqkg9ou3z4',
    password: 'psv6i2qnbf3ercre'
});

connection.connect(function(err) {
	if (err) {
		console.error('error connecting to the database: ' + err.stack);
		return;
	}

	console.log('connected to the database thread ID: ' + connection.threadId);
});

module.exports = connection;