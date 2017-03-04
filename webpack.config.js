module.exports={
    entry:"./src/public/js/app.js",
    output:{
        path:__dirname+"/src/public",
        filename:"bundle.js"
    },
    module:{
        loaders:[
            {
                test: /\.js?/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015"]
                }
            }
        ]
    },
    watch:true
}