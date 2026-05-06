var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

router.use(authenticateTokenFromHeaders);

var usersController = require('../controllers/usersController');
/* GET users listing. */
router.get('/', usersController.getAll);

router.get('/:id', function(req, res, next) {
  res.send(req.user);
});

module.exports = router;


//middleware
function authenticateTokenFromHeaders(req, res, next) {
  // Gather the jwt access token from the request header  
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; 
  // Unauthorized
  if (token == null) return res.sendStatus(401);
    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    if (err)
      return res.sendStatus(403); // Forbidden
    req.user = user;
    next();
  });
}