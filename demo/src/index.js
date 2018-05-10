'use strict';

var routes = require("./handler/handler");
let handlers = {};
Object.keys(routes).forEach(key => {
  let item = {};
  routes[key].paths.forEach(path => {
    handlers[path] = routes[key].handler;

  });
});

// loop all the routes
module.exports.handler = (event, context, callback) => {  // all the request first come to
  let resourcePath = event.context['resource-path'];
  // let json=JSON.stringify(handlers, function (key, value) { // way to print the json when the object key has functions
  //   console.log("the key is"+key);
  //   if (typeof value == 'function') {
  //     return value.toString();
  //   }
  //   else {
  //     return value;
  //   }
  // })
  // console.log("the full handlers are" +json);
  handlers[resourcePath](event, context, callback);
};