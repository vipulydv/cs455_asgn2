const express = require('express');
const app = express();
const router = express.Router();

// const path = __dirname + '/views/';
const port = 8080;

router.get('/getRandom', function(req,res){
  let x = Math.floor((Math.random()*31)+50);
  res.send({
    x:x,
  });
});

// app.use(express.static(path));
// app.use('/', router);

app.listen(port, function () {
  console.log('App listening on port 8080!')
});
