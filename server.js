/**
 * Created by arjun on 22/9/17.
 */

var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    path = require('path');

app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false}));
app.use(express.static(path.join(__dirname,'client')));

app.get('/',function(req,res){
    res.sendfile(__dirname+'/client/index.html');
    // res.render('index',{title : 'Computer Not Working'});
})

app.listen(9000);

console.log('server started on 9000');
module.exports = app;