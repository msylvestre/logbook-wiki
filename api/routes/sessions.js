"use strict";

var express     = require('express');
var router      = express.Router();
var bodyParser  = require('body-parser');
var konsole     = require('../lib/konsole.js');
var session     = require('../lib/sessions.js');

var urlencodedParser = bodyParser.urlencoded({ extended: false });  // Create application/x-www-form-urlencoded parser



// Create a new session
//--------------------------------------------------------------------------
router.post('/', urlencodedParser, function (req, res) {

  var sessionInfo = {
    date: req.body.date,
    track: req.body.track,
    LevelUpgradeRecommanded: req.body.LevelUpgradeRecommanded // NO, YELLOW, GREEN
  };
    
  var response;

  session.add(sessionInfo, function(err) {

    if (err) {
      response = {
        statusCode:404,
        msg: "addSessionFail",
        description: err
      }
    }
    else {
      response = {
        statusCode:200,
        msg: "addSessionSuccess",
        description: "User Registration was succesful."
      }
    }

    
    konsole.log("---- Create Session ----");
    konsole.log(JSON.stringify(response, null, 2));
    konsole.log("------------------------");

    res.statusCode = response.statusCode;
    res.send(response);
  
  });
    
});


module.exports = router;