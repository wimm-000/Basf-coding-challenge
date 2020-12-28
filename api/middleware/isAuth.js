const jwt = require('jsonwebtoken')
const constants = require("../constants/constants");

module.exports = (req, res, next) => {
  const authHeader = req.get('Authorizarion')
  if(!authHeader) {
    req.isAuth = false
    return next()   
  }
  const token = authHeader.split(' ')[1]
  if (!token || token === '') {
    req.isAuth = false;
    return next();   
  }
  let decodedToken
  try {
    decodedToken = jwt.verify(token, constants.SECRET);
  } catch (error) {
    req.isAuth = false;
    return next();       
  }
  if (!decodedToken) {
    req.isAuth = false;
    return next();   
  }
  req.isAuth = true
  req.userId = decodedToken.userId
  next()
}