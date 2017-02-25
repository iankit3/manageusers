var express = require('express');
var bodyParser     =         require("body-parser");
var connection = require('./database/connector');

var app = express();
app.listen(5200);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/api/users/", (req,res) => {
   connection.executeQuery('SELECT * from users',function(err,rows){
        res.end( JSON.stringify(rows) )
    })
})

app.post("/api/adduser/", (req,res) => {
    console.log(req)
   var firstname = req.body.firstname,
       lastname  = req.body.lastname,
       age       = req.body.age,
       gender    = req.body.gender,
       dob       = req.body.dob,
       phone     = req.body.phone,
       msg       = req.body.msg;

   console.log( JSON.stringify( req.body) )    
    
  var insertQuery = "INSERT INTO `test`.`users`"+
" (`firstname`, `lastname`, `age`, `gender`, `dob`, `phone`, `message`) "+
" VALUES ('"+firstname+"', '"+lastname+"', '"+age+"', '"+gender+"', '"+dob+"', '"+phone+"', '"+msg+"')";


   connection.executeQuery(insertQuery,function(err,rows){
        res.end( JSON.stringify(rows) )
   })
})