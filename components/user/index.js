
let {Router} = require('express');
let router = Router();
let  userController = require('./controllers/controller');
module.exports = (app) => {
    app.use("/users", router);
    router.get("/", userController.init)
     
};