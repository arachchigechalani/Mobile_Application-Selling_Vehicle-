const express = require('express')
const mongoose=require('mongoose')
const manage=require('./routes/manage')
const app = express()

const port = 4000


const url='mongodb://localhost/MobileApp'
mongoose.connect(url,{useNewUrlParser : true})
const con=mongoose.connection

con.on("open",()=>{
    console.log('monogoDB conneted..!')
})

app.use(express.json())
app.use('/manage',manage)


app.listen(port, (req,res) => {
  console.log(`server API started on port 4000`)
})