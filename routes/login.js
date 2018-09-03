var express = require('express');
var router = express.Router();

let LoginController = require('../controllers/loginController');

/* GET home page. */
router.post('/', function(req, res, next) {
  let loginController = new LoginController(req, res, next);
  loginController.login();
});

module.exports = router;
