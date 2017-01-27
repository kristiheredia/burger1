var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var path = require('path');
var app = express();
var PORT = process.env.PORT || 3000;
var orm = require('./config/orm.js');

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(methodOverride('_method'));
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

//routes
app.get('/', function(req,res) {
  orm.selectAll('burgers', callback);
  function callback(data) {
    console.log(data)
    //Is the burger devoured?
    data.forEach(function(value,index) {
      if (value.devoured === 1) {
        console.log('yummy')
      }
    })
    res.render('index', {notEaten: data});
  }
})
app.post('/create', function(req,res) {
  console.log(req.body);
  var insertBurger = req.body.burger_name;
  orm.insertOne('burgers', insertBurger, true, callback);
  function callback(data) {
    console.log(data);
    res.redirect('/');
  }
})


app.post('/update', function(req,res) {
  console.log(req.body);
  var updateId = req.body.id;

  orm.updateOne('burgers', updateId, callback)
  function callback(data) {
    console.log(data)
    res.redirect('/update', {notEaten: data});
  }


})
//static content
app.use(express.static(__dirname + '/public'));

app.listen(PORT, function() {
    console.log("Listening on PORT " + PORT);
});