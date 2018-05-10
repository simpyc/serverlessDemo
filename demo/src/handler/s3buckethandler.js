'use strict';
console.log("in the s3 bucket handler");
const paths = ["/s3bucket"];
var handler = function (event, context, callback) {
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Successfully processed the s3 bucket'
        }),
    };
    callback(null, response);
};

module.exports={paths,handler}