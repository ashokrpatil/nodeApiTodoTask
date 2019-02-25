
var express = require('express');
app = express();
port = process.env.PORT || 5000 //for envoiromental port
mongoose = require('mongoose')

const MongoClient = require('mongodb').MongoClient;

// replace the uri string with your connection string.
// const uri = "mongodb+srv://ashokpatil:ashsups\@7286@cluster0-1q7ty.mongodb.net/task4"
const uri = "mongodb+srv://ashokpatil:ashsups7286@cluster0-txmft.mongodb.net/test?retryWrites=true"
mongoose.connect(uri, { useNewUrlParser: true}).catch(function(err){
    console.log(err);
});

Task = require('./models/todoListModel') //created model loading here
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/Tododb'); //Tododb create DB in mongodb

// mongodb+srv://ashokpatil:<PASSWORD>@cluster0-txmft.mongodb.net/test?retryWrites=true

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var routes = require('./routes/todoListRoutes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);