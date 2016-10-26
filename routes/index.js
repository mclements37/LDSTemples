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

        

module.exports = router;
