var express = require('express');
var router = express.Router(); 
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('ldstemplesmap.html', { root:  'public' });
});

router.get('/gettemples', function(req, res, next) {
 console.log("in get temples"); 
 
fs.readFile(__dirname + '/temples.json',function(err,data) {
 if(err)
    throw err;
 
 res.status(200).json(JSON.parse(data));  

});

});

router.get('/findtemple',function(req, res, next) {

console.log("In find temple");  

fs.readFile(__dirname + '/temples.json',function(err,data) { 
  if(err)
    throw err;

  var myRe = new RegExp(req.query.q);
  var jsonResult = [];
  var temples = JSON.parse(data);
  
  for(var i = 0; i < temples.templedata.length; i++) {
    var templeName = temples.templedata[i].Temple.toLowerCase();
    var result = templeName.search(myRe);
    if(result != -1) {
      jsonResult.push(temples.templedata[i]);
    }
    
  }

  res.status(200).json(jsonResult);
});
});        

module.exports = router;
