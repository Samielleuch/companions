const path = require('path');
module.exports = {
    //change the build dir
    outputDir: path.resolve(__dirname , '../server/public'),
    //set proxy
    devServer: {
        proxy: {
            '/api' :{
                target : 'http://localhost:8081'
            }
        }
    }
};