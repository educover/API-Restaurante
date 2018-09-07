var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.session.admin){
    res.json('sesion admin creda')
  } else {
    res.json('no hay sesion admin')
  }
});

module.exports = router;
