var express = require('express');

var bodyParser = require('body-parser');

var app = express();

var path = require('path');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname, 'dist')));
app.use('/*', express.static(path.join(__dirname, 'dist')));


app.listen(5000,()=>{
    console.log("server listen on 5000")
});


app.post('/getUserDetails', function(req,res){

	console.log('getUserDetails hitted')
	var username = req.body.username;
	var password = req.body.password;

console.log(username,password);

	if (username=='admin' && password=='admin'){
		res.status(200).send({status:'success'});
		return
   }else{ 
	   res.status(500).send({status:'login failed'});

	}

   // send records as a response

})
