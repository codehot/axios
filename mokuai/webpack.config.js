const path = require("path");
module.exports = {
    mode : "development",
    entry: path.join(__dirname,"./src/index.js"),
    output:{
        path: path.join(__dirname,"./dist"),
        filename: "bundle.js"
    },
    // moudel:{
    //     rules:[
    //         {test:/\.css$/, use:["style-loader","css-loader"]},
    //         // {test:/\.less$/, use:["style-loader","less-loader"]}
    //     ]
    // }
}