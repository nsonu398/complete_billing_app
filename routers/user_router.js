const userRouter = require('express').Router()
const token_service = require('../services/token_service')
// const userController = require('../controllers/user_controller')


userRouter.get('/:id', token_service.validateToken, async(req, res)=>{
    if(req.body!=null){
        return res.status(200).send({message:req.params.id})
    }
    return res.status(200).send({message:"token is not verified. Try logging in again"})
})

module.exports = userRouter
