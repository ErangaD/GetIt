const AuthController = require("./src/controllers/AuthenticationController");
module.exports=function (app) {
    app.get('/login',function (req,res) {
        res.render('index');
    });

    app.get('/signUp',function (req,res) {
        res.render('index');
    });
    app.post('/buyerSignUp',AuthController.buyerSignUp);

}