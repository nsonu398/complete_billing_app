const authRouter = require('express').Router()
const auth_validator = require('../validator/auth_validator')
const auth_controller = require('../controllers/auth_controller')




authRouter.get('/', async (req, res)=>{
    res.status(200).send("auth")
})

authRouter.post('/signin', auth_validator.validateEmail, async (req,res) => {
    try{
        if(req.error){
            return res.status(400).send({message:req.error})
        }
        var user = await auth_controller.login(req.body)
        if(user.error){
            return res.status(400).send({message:user.error})
        }
        return res.status(200).send({"token":user.token})
    }catch(err){
        return res.status(400).send({message:err})
    }
    
})

authRouter.post('/signup', auth_validator.validateEmail, async (req,res) => {
    if(req.error){
        return res.status(400).send({message:req.error})
    }
    if(auth_controller.signup(req.body)){
        res.status(200).send({message:"account created successfully"})
    }
    else{
        res.status(200).send({message:"Account was not created due to some internal issues. Try again later"})
    }
})





module.exports = authRouter