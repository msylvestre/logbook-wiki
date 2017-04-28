var bodyParser = require('body-parser');
var request    = require('request');

var loginParam = {
  form: {
    email:'marco@venzee.com', 
    password:'123456789q'
  }
};

var userParam = {
  form: {
    firstname:     "Racing",
    lastname:      "Fuel",
    email:         "fuel@racinglogbook.com",
    password:      "123456789q",
    role:          "COACH",
    carBrand:      "Subaru",
    carModel:      "STI",
    carYear:       "2009",
    carColor:      "White",
    carDrivetrain: "AWD"
  }
};


request.post('http://127.0.0.1:8081/api/users/login', loginParam, function(err, response, body) {
  console.log("\n\n-------------- TEST #1 --------------")
  console.log('error:', err); // Print the error if one occurred 
  console.log('statusCode:', response.statusCode); // Print the response status code if a response was received 
  console.dir(JSON.parse(body), {depth: null, colors: true}) // Print the HTML for the Google homepage. 
});

request.post('http://127.0.0.1:8081/api/users', userParam, function(err, response, body) {
  console.log("\n\n-------------- TEST #2 --------------")
  console.log('error:', err); // Print the error if one occurred 
  console.log('statusCode:', response.statusCode); // Print the response status code if a response was received 
  console.dir(JSON.parse(body), {depth: null, colors: true}); // Print the HTML for the Google homepage. 
});


request.get('http://127.0.0.1:8081/api/users', function(err, response, body) {
  console.log("\n\n-------------- TEST #3 --------------")
  console.log('error:', err); // Print the error if one occurred 
  console.log('statusCode:', response.statusCode); // Print the response status code if a response was received 
  console.dir(JSON.parse(body), {depth: null, colors: true});

});

request.delete('http://127.0.0.1:8081/api/users/3', function(err, response, body) {
  console.log("\n\n-------------- TEST #4 --------------")
  console.log('error:', err); // Print the error if one occurred 
  console.log('statusCode:', response.statusCode); // Print the response status code if a response was received 
  console.dir(JSON.parse(body), {depth: null, colors: true});

});