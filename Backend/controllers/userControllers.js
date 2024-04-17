const { Resend } = require("resend");

const User=require("../models/userModel");
const cloudinary = require("cloudinary").v2;

const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors=require("../middleware/catchAsyncErrors");
const sendToken = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail");

// const resend=new Resend(process.env.RESEND_API_KEY)




exports.registerUser= catchAsyncErrors(async(req,res,next)=>{
   
        const {name, email, password, username}= req.body
        const user = await User.create({
            name, email, password,username
        });
    
    sendToken(user,201,res)
       
           
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
  try {
   

    const user= await User.findByIdAndUpdate(req.user.id, {goals: (req.body.goals)}).then((success)=>{
      console.log("success")
    })
   
    // await user.save();
  console.log("hello", req.body)
    const message="your verification link is here!!"
    await sendEmail({
      email:req.body.email,
      subject: `Verification`,
      message,

  }).then((result)=>{
console.log("done")
  }).catch((err)=>{
    console.log(err)
  });

    res.status(200).json({ success: true, user });
  } catch (error) {
    console.error(error);
    return next(new ErrorHandler("Interner server error",500));

  }
});




exports.updateGoals =catchAsyncErrors( async (req, res,next) => {




  if (!req.files || Object.keys(req.files).length === 0) {
    return next(new ErrorHandler("No such file is availablet",400));

  }
  const avatar = req.files.avatar;

  const result = await cloudinary.uploader.upload(avatar.tempFilePath, {
    folder: 'avatars',
    width: 150,
    crop: 'scale',
  });
    
    // Update the user's profile with the new avatar URL
    const user = await User.findById(req.user.id);
    user.avatar = {
      url: result.secure_url,
    };
    await user.save().then((suc)=>{
      console.log(suc)
    });
   

    // await resend.emails.send({
    //   from: "0drive0drive0@gmail.com",
    //   to: [user.email],
    //   subject: "Verification",
    //   text:" hello",
    //   html: "<strong>Verify your account by clicking on this link  </strong> <a href="/">here!</a>",
    // }).then((data)=>{
    //   console.log(data)
    // }).catch((err)=>{
    //   return next(new ErrorHandler("Internal server error",400));

    // });


//     const message="your verification link is here!!"
//     await sendEmail({
//       email:user.email,
//       subject: `Verification`,
//       message,

//   }).then((result)=>{
// console.log(result)
//   }).catch((err)=>{
//     console.log(err)
//   });


    res.status(200).json({ success: true ,user});
 
});
