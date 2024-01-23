const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://Innovathonbits:Innovathonbits123@eventqueries.bpxbmlk.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    console.log("connected")
}).catch(()=>{
    console.log("failed")
})

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String
});

const users = mongoose.model('test', userSchema);

module.exports=users