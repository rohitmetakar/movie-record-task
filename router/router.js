 const express = require('express');
 const router = express.Router();
 const controllers = require('../controller/controller');
 
 router.post('/insertData', controllers.createApi)
 
 
 router.get('/getMoveiData', controllers.getMoveiData)
 
 router.put('/updateMovie/:id', controllers.updateMovie)
 
 
 router.delete('/deleteMovie/:id', controllers.deleteMovie)
 
 router.get('/getMovie/:id', controllers.getMovie)
  
 
 module.exports  = router