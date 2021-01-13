const catchWrapper = require()
const {regValidation} = require()
const User = require ("../models/userModel")

//function that validates User
/*function validateUser(user) {
    const usersSchema = Joi.object({
      fullName: Joi.string().min(5).max(15).required(),
      phoneNumber: Joi.string().min(3).max(15).required(),
      email: Joi.string().min(5).max(45).required(),
      password: Joi.string().min(2).max(55).required(),
    });
    return usersSchema.validate(user, schema)
  }*/


  exports.postUser =  catchWrapper (async (req, res) => {
    const inputValidation = await regValidation.validateUser(req.body)
    //check if user exists
    const checkUser = User.findOne({email: regValidation.email })
    if (checkUser) res.status(400). send({message: `A user already exists with this email`})

    //register new User
    const user = new User({...inputValidation})
    await user.save({ new: true}, (err) =>{
      if (err) res.status(400).send(`user details could not be registered: check server connection`)})
      res.status(200).send({user})
  })