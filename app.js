let express = require('express');
let app = express();
let user = require(__dirname+ '/route/user');
let admin = require(__dirname+ '/route/admin');
app.all('/', function(req, res, next) {
	console.log('executed on all methods '+ req.method);
	next();
});
app.get('/', function(req, res) {
	console.log('Hello World!!!');
	res.send('Hello World!!!');
});
app.post('/', function(req, res) {
	res.send('Posted!!!');
});
app.get('/about', function(req, res) {
	res.send('about page');
});
app.get(/.*ula$/, function(req, res) {
	res.send('end with ula');
});
app.get('/bo+o', function(req, res) {
	res.send('booo booo' );
});
app.use('/user', user);
app.use('/admin', admin);
app.listen(3030);
console.log('http://127.0.0.1:3030');
