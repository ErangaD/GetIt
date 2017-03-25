const AuthController = require("./src/controllers/AuthenticationController");
let LocalStrategy = require('passport-local');
var User = require('./src/models/User');
module.exports=function (app,passport) {
    app.get('/login',function (req,res) {
        res.render('index');
    });

    app.get('/signUp',function (req,res) {
        res.render('index');
    });
    app.get('/profile',function (req,res) {
       res.render('index');
    });
    app.get('/posts',function (req,res) {
        res.render('index');
    });
    app.post('/buyerSignUp',AuthController.buyerSignUp);
    passport.use(new LocalStrategy(
        function (username,password,done) {
            User.getUserByUsername(username,function (err,user) {
                if (err)throw err;
                if (!user) {
                    return done(null, false, {message: "Unknown user"})
                }
                User.comparePassword(password, user.password, function (err, isMatch) {
                    if (err)throw err;
                    if (isMatch) {
                        return done(null,user);
                    } else {
                        done(null, false, {message: "Invalid password"});
                    }
                });
            });
        }
    ));
    passport.serializeUser(function (user,done) {
        done(null,user.id);
    });
    passport.deserializeUser(function (id,done) {
        User.getUserById(id,function (err,user) {
            done(err,user);
        });
    });
    app.post('/login',passport.authenticate('local',{successRedirect:'/signUp',failureRedirect:'/login'}),
    AuthController.login);
}
