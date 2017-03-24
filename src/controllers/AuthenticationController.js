var User = require('../models/User');
exports.buyerSignUp = function (req,res,next) {
    let name = req.body.firstName;
    let userName = req.body.lastName;
    let email = req.body.email;
    let password = req.body.password;
    let password1= req.body.password1;
    console.log(password1);
    
    let newUser = new User({
        name: name,
        email: email,
        userName: userName,
        password:password,
        
    });

}