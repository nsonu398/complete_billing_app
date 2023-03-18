const joi = require('joi')

const user = joi.object({
    email:joi.string().email().min(5).max(50).required(),
    password:joi.string().min(8).max(50).required()
})

this.validateEmail = async(req,res,next) => {
    var _user = req.body
    if (user.validate(_user).error){
        req.error = user.validate(_user).error.message
    }
    next()
}

module.exports = this