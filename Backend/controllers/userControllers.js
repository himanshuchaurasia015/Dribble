
const User=require("../models/userModel");
const cloudinary = require("cloudinary").v2;

const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors=require("../middleware/catchAsyncErrors");
const sendToken = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail");




exports.checkUsername = catchAsyncErrors(async (req, res, next) => {

  const {username } = req.body;

  if (await User.findOne({ username: username })) {
      return next(new ErrorHandler("Username is already taken", 401));
  }else{

    res.status(200).json({
      success:true
    });

  }

});



exports.registerUser = catchAsyncErrors(async (req, res, next) => {

  const { name, email, password, username } = req.body;

  if (await User.findOne({ email: email })) {
      return next(new ErrorHandler("User already exist please Login", 401));
  }


  const user = await User.create({
      name, email, password, username
  });

  sendToken(user, 201, res);
});



//login user

exports.loginUser= catchAsyncErrors(async(req,res,next)=>{

  const {email, password}=req.body;

  //checking email and password
  if (!email || !password){
    return next(new ErrorHandler("Please enter Email and password",400));


  }

  const user= await User.findOne({email}).select("+password");

  if (!user){
    return next(new ErrorHandler("Invalid Email or Password",401));


  }
  
  const isPasswordMatched= await user.comparePassword(password);
  
  if(!isPasswordMatched){
    return next(new ErrorHandler("Invalid Email or Password",401))

  }

  sendToken(user, 200,res)


})



// update User Profile
exports.updateProfile = catchAsyncErrors(async (req, res,next) => {
  
   

    const user= await User.findByIdAndUpdate(req.user.id, {goals: (req.body.goals)}).then((success)=>{
      console.log("success")
    })
   
    // await user.save();
    const message="Your Verification link is here!!"
    await sendEmail({
      email:req.body.email,
      subject: `Verification`,
      message,

  }).then((result)=>{
    console.log(result)
  }).catch((err)=>{
    console.log(err)

    return next(new ErrorHandler("Unable to upload image", 401));

  });

    res.status(200).json({ success: true, user });
  
});




exports.updateImg =catchAsyncErrors( async (req, res,next) => {



  if (!req.files || Object.keys(req.files).length === 0) {

    return next(new ErrorHandler("No such file is availablet",400));

  }
  const avatar = req.files.avatar;

  await cloudinary.uploader.upload(avatar.tempFilePath, {
    folder: 'avatars',
    width: 150,
    crop: 'scale',
  }).then(async(result)=>{

    // Update the user's profile with the new avatar URL
    const user = await User.findById(req.user.id);
    user.avatar = {
      url: result.secure_url,
    };
    await user.save().then((suc)=>{
      console.log(suc)
    });

    res.status(200).json({ success: true ,user});


  }).catch((err)=>{
    res.status(200).json({ success: false , message:"Unable to upload Image"});

  });
    
    
   



 
});
