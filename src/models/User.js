let mongoose = require("mongoose");
let bycrypt = require("bcryptjs");

mongoose.connect('mongodb://localhost/GetIt');

let db = mongoose.connection;

let UserSchema= mongoose.Schema({
    username:{
        type:string
    },
    password:{
        type:string
    },
    email:{
        type:string
    },
    name:{
        type:string
    },
    telNo:{
        type:string
    },
    userType:{
        type:Boolean,
        //false implies that user is a buyer
        default:false
    },
    address:{
        number:{type:string},
        streetAddress:{type:string},
        ruralAddress:{type:string},
        cityName:{type:string}
    },
    saleTypes:[String]
});

UserSchema.index({username:1,email:1},{unique:true});

let User = module.exports=mongoose.model('User',UserSchema);

module.exports.createUser = function (newUser,callback) {
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(newUser.password, salt, function(err, hash) {
            newUser.password=hash;
            newUser.save(callback);
        });
    });
}