/*
Ebibi'@

This code is for querying data from a dynamoDb table.
*/

var AWS = require("aws-sdk");

const credentials = new AWS.SharedIniFileCredentials({
  profile: "default"
});
AWS.config.credentials = credentials;
AWS.config.update({
  region: "us-east-1",
  endpoint: "http://dynamodb.us-east-1.amazonaws.com"
});

let documentClient = new AWS.DynamoDB.DocumentClient();

let read = function() {
  const params = {
    TableName: "smccCustomers",
    Key: {
      id: "001"
    }
  };

  documentClient.get(params, function(err, data) {
    if (err) console.log(err);
    else console.log("success " + JSON.stringify(data));
  });
};

read();