var express = require('express');

var bodyParser = require('body-parser');

var app = express();

var path = require('path');

var http = require('http');

app.use(express.static(__dirname, 'dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get('/*',express.static(__dirname, 'dist'));

var server = http.createServer(app);

server.listen(5000,()=>{
    console.log("server listen on 5000")
});
