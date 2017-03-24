module.exports=function (app) {
    app.get('/login',function (req,res) {
        res.render('index');
    });

    app.get('/signUp',function (req,res) {
        res.render('index');
    });
    app.post('/buyerSignUp',function (req,res) {
        
    });

}