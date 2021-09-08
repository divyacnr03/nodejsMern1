var express = require('express');
var router = express.Router();
var fs = require('fs');
const { networkInterfaces } = require('os');

/* GET home page. */
router.get('/carts', function(req, res, next) {
  getDetails("carts")
  
});

router.get('/products', function(req, res, next) {
  getDetails("carts")
  
});


router.get('/testtxt', function(req, res, next) {

  console.log(req)
  const fileContent = fs.readFileSync('/home/divya/workspace/stuff/nodejs/express_filecrud/test.txt',{encoding : 'utf8', flag:'r'});
  res.json({ filecontent: fileContent})
});



// Describe the data you are perform the action
// Should not describe the actions
// config = middleware1, router.put, middleware2

// middleware1(req, res, next){
//   if(user == akshay ){
//     next();
//   }
//   else {
//     res.end()

//   }
// }

router.put('/testtxt', function(req, res, next) {
  console.log(" --- fourth next")

  try{
    /// Code to fetch the items details

    if (no_of_items ==0 ){
     throw new Error("out of stock");
   
    } 
    else {
      // Update the no of item --
      res.status(200).send();
    }

  } catch(err){
    err.errStatus = 500;
    next(err);
  }

});


// middleware2() {
  
// }


router.post('/create', function(req, res, next) {

  var createStream = fs.createWriteStream(`/home/divya/workspace/stuff/nodejs/express_filecrud/${req.query.params}.txt`);
  createStream.end(); 
  res.json({ filecontent: "file created successfuly"})
});





router.post('/delete', function(req, res, next) {

  fs.unlink(`/home/divya/workspace/stuff/nodejs/express_filecrud/${req.query.params}.txt`, (err) => {
    if (err) throw err;
    res.json({ filecontent: 'path/file.txt was deleted'})

  });
});


module.exports = router;
