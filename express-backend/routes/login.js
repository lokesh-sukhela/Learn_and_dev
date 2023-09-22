var express = require('express');
var router = express.Router();

var logindetails=require('../model/controller/LoginController/Login_Controller')



router.post("/",logindetails.logindetailscheck);

module.exports = router;
