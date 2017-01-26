var connection = require('./connection.js');

var orm = {
    selectAll: function(tableInput, fe) {
        var queryString = 'SELECT * FROM ' + tableInput;
        connection.query(queryString, function(err, result) {
            fe(result);
        });
    },

    insertOne: function(tableInput, nameInput, devourInput, fe) {
        var queryString = 'INSERT INTO ' + tableInput + ' SET ?' 
        connection.query(queryString, {burger_name: nameInput, devoured: devourInput}, function(err, result) {
            fe(result);
        });
    },

    updateOne: function(tableInput, nameInput, idInput, fe) {
        var queryString = 'UPDATE ' + tableInput + ' SET ? WHERE ?'
        connection.query(queryString, [{burger_name: nameInput}, {id: idInput}], function(err, result) {
            fe(result);
        });
    },

    // deleteInput: function(tableInput, idInput, fe) {
    //     var queryString = 'DELETE FROM ' + tableInput + ' WHERE ?'
    //     connection.query(queryString, {id: idInput}, function(err, result) {
    //         fe(result);
    //     });
    // }
};

module.exports = orm;