const AWS = require('aws-sdk');
AWS.config.update({ resgion: 'us-east-1' });

const dynamoDB = new AWS.DynamoDB.DocumentClient();
const tableName = proces.env.TABLE_NAME;

exports.handler = async(event) => {

    return {
        statusCode: 200,
        body: JSON.stringify({
            
        })
    }
}