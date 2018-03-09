var express = require('express');

var session = require('express-session');

var bodyParser = require('body-parser');

var app = express();

var path = require('path');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(session({
	secret: 'Asdfgh12',
	resave: false,
	saveUninitialized: true
}))

app.use(express.static(path.join(__dirname, 'dist')));
app.use('/*', express.static(path.join(__dirname, 'dist')));


app.listen(5000, () => {
	console.log("server listen on 5000")
});


// app.post('/getUserDetails', function(req,res){

// 	console.log('getUserDetails hitted')
// 	var username = req.body.username;
// 	var password = req.body.password;

// console.log(username,password);

// 	if (username=='admin' && password=='admin'){
// 		res.status(200).send({status:'success'});
// 		return
//    }else{ 
// 	   res.status(204).send({status:'login failed'});

// 	}

// })

// const loginvalid = (req, res, next) => {
// 	if (req.body) {
// 		next();
// 	} else {
// 		res.status(403).send({ errorMsg: 'need to login' });
// 	}
// }


const appUser = {
	name: 'admin',
	pw: 'admin'
}

app.post('/getUserDetails', function (req, res) {
	const user = appUser;
	if (user && user.pw == req.body.password) {
		const userWithoutPw = { ...user };
		delete userWithoutPw.pw;
		req.session.user = userWithoutPw;

		console.log('req sessin user', req.session.user);

		res.status(200).send({
			user: userWithoutPw
		});
	}else{
		res.status(203).send({
			errorMsg:'Permission denied'
		})
	}

})

app.post('/login', function(req, res){
	console.log("login hitted");
	req.session.user ? res.status(200).send({loggedIn: true}).json : res.status(203).send({loggedIn: false}).json;
})

app.post('/logout', function(req,res){
	console.log('logout hitted');

	req.session.destroy((err)=>{
		if(err){
			res.status(500).send({error:'could not logout'});
		}else{
			res.status(200).send({status:'logout success'});
		}
	})
})


