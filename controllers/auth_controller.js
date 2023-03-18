const token_service = require('../services/token_service')
const crypt_service = require('../services/crypt_service')
const authentication_client = require('../database/authentication_client')
var ar = {}


this.signup = async(user)=>{
    try{
        crypt_service.hash(user.password, (hash)=>{
            const _user = {
                "email":user.email,
                "password":hash,
                "token":""
            }
            const results =  await authentication_client.addCredentials(_user)
            if(results){
                return true
            }
            else{
                return false
            }
        })        
    }
    catch(err){
        return false
    }
}

this.login = async (user)=>{
    try{
        const results = await authentication_client.getCredentialsToken(user.email)
        if(!results){
            user.error = "email does not exist"
        }
        else{
            if(crypt_service.compare(user.password, results.password)){
                user.token = await this.generateToken(user)
                
            }
            else{
                user.error = "password is incorrect"
            }
        }
        return user
    }
    catch(err){
        user.error = err
        return user
    }
    
}

this.generateToken = async(user)=>{
    return await token_service.getToken(user)
}

