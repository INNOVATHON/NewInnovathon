const express = require("express")
const Users = require("./mongo")
const app = express()
const cors = require("cors")
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

// app.get("/",cors(),(req,res)=>{

// })

app.post("/",async(req,res)=>{
    const {form} = req.body;
    const data={
       form:form
    }

    await Users.insertMany(data)
   
})

app.listen(8000,()=>{
    console.log("port connected")
})