const path = require('path')
console.log(require('dotenv').config({path: path.join(__dirname, '../.env')}))//.env
const express =  require('express')
var app = express()
const publicPath = path.join(__dirname, '../public')
app.use(express.static(publicPath))
const port = process.env.PORT;
console.log(port)
app.listen(port,()=>{
    console.log('listening to port ', port)
})
