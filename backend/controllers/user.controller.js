const userModel=require('../models/user.model');
const Userservice=require('../services/user.services');
const {validatoinResult}=require('express-validator');

module.exports.registerUser=async (req,res,next)=>{
const errors=validatoinResult(req);



    
}