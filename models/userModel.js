const mongoose = require ("mongoose")
const {Schema} = mongoose 

const userSchema = new mongoose.Schema({
    firstName: String, required: [true, "field name is required"],
    lastName: String, required: [true, "field name is required"],
    phoneNumber: String, required: [true, "field name is required"],
    email: String, required: [true, "field name is required"],
    password: String, required: [true, "field name is required"],
    country: String, required: [true, "field name is required"],
    state : String , required: [true, "field name is required"],
    roles : Number, required: [true, "field name is required"]
  });
  
  module.exports =  mongoose.model("users", userSchema)