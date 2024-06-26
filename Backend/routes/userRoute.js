
const express=require("express");
const { registerUser,loginUser, updateProfile, updateImg,checkUsername} = require("../controllers/userControllers");
const {isAuthenticatedUser}= require("../middleware/auth")
const router=express.Router();


//register user
router.route("/register").post(registerUser);
router.route("/username").post(checkUsername);
//login
router.route("/login").post(loginUser);


//update user profile
router.route("/me/update").put(isAuthenticatedUser, updateProfile);

router.route("/me/img").put(isAuthenticatedUser, updateImg);



module.exports=router
