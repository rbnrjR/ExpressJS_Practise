let express = require('express');
let router = express.Router();
router.get('/', function(req, res) {
	res.send('user page');
});
router.get('/info', function(req, res) {
	res.send('user info');
});
module.exports = router;
