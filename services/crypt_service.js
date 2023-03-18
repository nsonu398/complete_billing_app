const bcrypt = require('bcrypt')

this.hash = (pass, callback)=>{
    try{
        bcrypt.hash(pass,10,(err,hash)=>{
            if(!err){
                callback(hash.toString())
            }
            else{
                callback(null)
            }
        })
    }
    catch(err){
        callback(null)
    }
    
}

this.compare = async (pass, hash)=>{
    bcrypt.compare(pass, hash, (err, result)=>{
        if (!err){
            return result;
        }
        else{
            false
        }
    })
}

module.exports = this