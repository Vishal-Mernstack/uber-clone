const userModel=require('../models/user.model');
const Userservice=require('../services/user.services');
const {validationResult}=require('express-validator');

module.exports.registerUser=async (req,res,next)=>{
const errors=validationResult(req);
if(!errors.isEmpty()){
return res.status(400).json({errors:errors.array()});

}

console.log(req.body);


const {firstname,lastname,email,password}=req.body;

const hashedPassword=await userModel.hashedPassword(password);

const user=await Userservice.createUser({
    firstname:fullname.firstname,
    lastname:lastname,
    email,
    password:hashedPassword
});

const token=user.generateAuthToken();
    res.status(201).json({
        token,
        user
    })
}