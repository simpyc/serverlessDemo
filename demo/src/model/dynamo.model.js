

var AWS = require('aws-sdk');
var dynamoDBConfiguration = {
    "region": "us-west-2"
};

AWS.config.update(dynamoDBConfiguration);
var cfg = { "endpoint": new AWS.Endpoint("http://localhost:8383") };
AWS.config.update(cfg);
var db = new AWS.DynamoDB();
var dynamoDB = new AWS.DynamoDB(cfg);
var docClient = new AWS.DynamoDB.DocumentClient();

class dbOperations {

    scanTable(obj, callback) // pass the params with Table name
    {
        docClient.scan(obj, function (err, data) {
            if (err) {
                console.log("the err is" + err);
                callback(err, null);
            } else {
                callback(null, data);
            }
        });

    }

    postData(data, callback) {
        docClient.put(data, function (err, data) {
            if (err) {
                callback(err, null);
            } else {
                callback(null, data);
            }
        });

    }

    deleteItem(data, callback) { // delete the item from the table
        docClient.delete(data, function (err, data) {
            if (err) {
                callback(err, null);
            } else {
                callback(null, data);
            }
        });


    }

    updateTable(data, callback) {
        docClient.update(data, function (err, data) {
            if (err) {
                callback(err, null);
            } else {
                callback(null, data);
            }
        });

    }

}
module.exports =dbOperations;
