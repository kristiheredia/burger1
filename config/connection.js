var mysql = require('mysql');

// var connection = mysql.createConnection({
// 	host: 'localhost',
// 	user: 'root',
// 	password: '',
// 	database: 'burgers_db'
// })

var connection = mysql.createConnection({
    host: 'mysql://rrzo5uvqkg9ou3z4:psv6i2qnbf3ercre@wp433upk59nnhpoh.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/tqgvvcx98zoxayrf',
    user: 'rrzo5uvqkg9ou3z4',
    password: 'psv6i2qnbf3ercre',
    database: 'burgers_db'
});

connection.connect(function(err) {
	if (err) {
		console.error('error connecting to the database: ' + err.stack);
		return;
	}

	console.log('connected to the database thread ID: ' + connection.threadId);
});

module.exports = connection;