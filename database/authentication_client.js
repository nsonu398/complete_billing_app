const AWS = require('aws-sdk');
const uuid = require('sequential-uuid');
require('dotenv').config();


//configure aws
AWS.config.update({
    region: process.env.AWS_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});


//authentication client
const authentication_client = new AWS.DynamoDB.DocumentClient();
const AUTHENTICATION = process.env.AUTHENTICATION_TABLE;


this.addCredentials = async(user)=>{
    const params = {
        TableName: AUTHENTICATION,
        Item: {...user}
    }
    try{
        const results = await authentication_client.put(params).promise();
        return results;
    }catch(e){
        throw e;
    }
};

this.getCredentialsToken = async(email)=>{
    const params = {
        TableName: AUTHENTICATION,
        Item: {"email": email}
    }
    try{
        const results = await authentication_client.get(params).promise();
        return results.token
    }catch(e){
        throw e;
    }
}

this.getPasswordHash = async(email)=>{
    const params = {
        TableName: AUTHENTICATION,
        Item: {"email": email}
    }
    try{
        const results = await authentication_client.get(params).promise();
        return results.password
    }catch(e){
        throw e;
    }
}




module.exports = this