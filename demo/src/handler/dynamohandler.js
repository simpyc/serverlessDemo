'use strict';
console.log("in the dynamodb handler");
// main handler file
const paths = ["/dynamodb", "/"];
var dynamo_service = require("../services/dynamo.service");
var dynamo_model = require("../model/dynamo.model");
var model = new dynamo_model() //making the model object
var service = new dynamo_service(model); // making the service object

var handler = function (event, context, callback) {
  console.log("the event params are" + JSON.stringify(event.params));
  let data = {};
  data.tablename = event.params.querystring.tablename;
  service.getTableData(data, function (err, res) {
    if (err) {
      callback(err);
    }
    else {
      callback(null, res);
    }
  });
};
module.exports = { paths, handler };