const catchAsyncErrors=require("./catchAsyncErrors");
const jwt=require("jsonwebtoken")
const User = require("../models/userModel");
const ErrorHandler = require("../utils/errorhandler");


exports.isAuthenticatedUser= catchAsyncErrors(async(req,res,next)=>{
    // const {token}= req.cookies;
    // console.log(req.cookies)
    console.log(req.headers)
    const token=req.headers.authorization

    if(!token){
        return next(new ErrorHandler("Please Login to access this resources",401));
    }

    const decodedData=jwt.verify(token, process.env.JWT_SECRET);

    req.user=await User.findById(decodedData.id);

    next()
})






