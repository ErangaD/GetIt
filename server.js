var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');
var expressValidator=require('express-validator');
var flash = require('connect-flash');
var passport = require('passport');
var LocalStrategy  = require('passport-local').Strategy;
var mongo = require('mongodb');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/GetIt');
var db = mongoose.connection
    .once('open',()=>console.log("Database connection established"))
    .on('error',(error)=>{
        console.warn('Warning',error);
    })
    .on('disconnected',()=>console.log('Mongoose default connection disconnected')
    );



var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(passport.initialize());
app.use(passport.session());

app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}));
app.use(expressValidator({
    errorFormatter: function(param, msg, value) {
        var namespace = param.split('.')
            , root    = namespace.shift()
            , formParam = root;

        while(namespace.length) {
            formParam += '[' + namespace.shift() + ']';
        }
        return {
            param : formParam,
            msg   : msg,
            value : value
        };
    }
}));

app.use(flash());

// Global Vars
app.use(function (req, res, next) {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    res.locals.user = req.user || null;
    next();
});

require("babel-core/register");
app.set('views',__dirname+"/src/views");
/*app.engine('handlebars', exphbs({defaultLayout:'layout'}));
app.set('view engine', 'handlebars');*/
app.set('view engine','pug');
require('./routes')(app,passport);
app.use(express.static('./src/public'));
app.listen(process.env.PORT || 3000,function () {
    console.log("Server started on 3000");
});
process.on('SIGINT', function() {
    mongoose.connection.close(function () {
        console.log('Mongoose default connection disconnected through app termination');
        process.exit(0);
    });
});