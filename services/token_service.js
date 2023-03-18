const webtoken = require('jsonwebtoken')
require('dotenv').config()

this.getToken = async (json)=>{
    return webtoken.sign({data:json}, process.env.TOKEN_SECRET, {expiresIn:'2h'})
}

this.validateToken = async (req, res, next)=>{
    try{
        const token = req.headers['authorization'].split(' ')[1]
        var decoded = webtoken.decode(token, process.env.TOKEN_SECRET)
        decoded!=null?req.user = decoded:req.body = null
        console.log(decoded)
        req.user = decoded
        next();
    }
    catch(err){
        req.body = null
        next()
    }
}

module.exports = this