var express = require('express'),
    app = express(),
    port = process.env.Port || 8080,
    router = express.Router();
const jwt = require('express-jwt');
const cors = require('cors');
app.use(cors());

const authCheck = jwt({
  secret: new Buffer('YOUR_AUTH0_SECRET', 'base64'),
  audience: 'YOUR_AUTH0_CLIENT_ID'
});

app.set('view engine','jade');
app.set('views', __dirname+'/src/client');
router.use(function(req,res,next){
  console.log("something is happening");
  next();
});

app.use(express.static(__dirname));
router.get('/', function(req,res){
  res.render('index');
});
app.use(router);
app.listen(port);
console.log('magic happens on port'+' '+port);
