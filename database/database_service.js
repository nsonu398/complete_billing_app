require('dotenv').config()
const mongoose = require('mongoose')

const url = 'mongodb+srv://<sonu>:<kTxCxb8t9dm1ctP3>@auth-database.ocyylxs.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})