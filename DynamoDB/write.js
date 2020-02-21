/*
Ebibi'@

This Code is for writing data into a dynamoDb table

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

let write = function() {
  const params = {
    TableName: "smccCustomers",
    Item: {
      id: "001",
      firstname: "JEWE",
      lastname: "Example",
      email: "exampleJewe@jwe.com"
    }
  };

  documentClient.put(params, function(err, data) {
    if (err) console.log(err);
    else console.log("success");
  });
};

write();