var express = require('express');
var router = express.Router(); 
var fs = require('fs');
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('ldstemplesmap.html', { root:  'public' });
});

/* GET list of temples */
router.get('/gettemples', function(req, res, next) {
  console.log("in get temple");

 /* fs.readFile(__dirname + '/temples.json',function(err,data) { 
    if(err) 
      throw err; 

    res.status(200).json(data);
  });*/ 


});

/* GET temple
router.get('/findtemple', function(req, res, next) {
  console.log("in find temple");

 /* fs.readFile(__dirname + '/cities.dat.txt',function(err,data) { 
    if(err) 
     throw err; 

    var myRe = new RegExp("^" + req.query.q);  
    var jsonresult = []; 
    var cities = data.toString().split("\n"); 
        
    for(var i = 0; i < cities.length; i++) {
          var result = cities[i].search(myRe); 
          if(result != -1) {
           jsonresult.push({city:cities[i]});
          } 
        }   
        
    res.status(200).json(jsonresult);
  });*/ 

});

module.exports = router;

