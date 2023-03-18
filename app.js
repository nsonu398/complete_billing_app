const { request } = require('express')
const express = require('express')
const authRouter = require('./routers/auth_router')
const userRouter = require('./routers/user_router')
require('dotenv').config()


const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))


const PORT = process.env.PORT || 8080


app.get('/',(req,res) => {
    res.status(200).send({msj : welcome})
})

app.use('/auth', authRouter)

app.use('/users', userRouter)

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
})