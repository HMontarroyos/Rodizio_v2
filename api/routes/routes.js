      const express = require("express");
      const router = express.Router();
      
      const controller = require('../controllers/controllers');
      
      
      router.post("/car", controller.controllerCars);
      

      
      module.exports = router;




/*

    const controller = require('../controllers/controllers')();
  
    
    app.route('/car')
      .post(controller.list);
      */