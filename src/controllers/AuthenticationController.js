var User = require('../models/User');
exports.buyerSignUp = function (req,res,next) {
    let name = req.body.firstName;
    let userName = req.body.lastName;
    let email = req.body.email;
    let password = req.body.password;
    let password1= req.body.password1;
    let telNo = req.body.tpNo;
    console.log(password1);
    
    let newUser = new User({
        name: name,
        email: email,
        username: userName,
        password:password,
        telNo:telNo
    });
    User.createUser(newUser,function (err,user) {
        if(err)throw err;
        console.log(user);
    });
    res.redirect('login');

}
exports.login=function (req,res) {
    res.redirect('login');
}