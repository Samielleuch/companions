const path = require('path');
module.exports = {
    //change the build dir
    outputDir: path.resolve(__dirname , '../server/public'),
    //set proxy
    devServer: {
        proxy: {
            '/api' :{
                target : 'https://ecstatic-mcnulty-92ec6d.netlify.com'
            }
        }
    }
};