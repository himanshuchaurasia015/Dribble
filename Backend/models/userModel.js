const mongoose=require("mongoose")
const validator=require("validator")
const jwt= require("jsonwebtoken")
const bcrypt=require("bcryptjs");



const userSchema= new mongoose.Schema({

    name:{
        type: String,
        required:[true,"Please Enter Your Name"],
        minLength:[4, "Name should have more than 4 characters"],
        maxLength:[30, "Name can not exceed 30 characters"]
    },
    email:{
        type:String,
        required:[true,"Please enter Your Email"],
        unique:[true,"User Already Exists"],
        validate:[validator.isEmail, "Please Enter a Valid Email"]
    },
    password:{
        type:String,
        required:[true,"Please Enter Your Password"],
        minLength:[8,"Password should be greater than 8 characters"],
        select:false
    },
    avatar:{
        url:{
            type:String,
        }
    },
    username:{
        type:String,
        required:[true,"Please Enter username"],
        unique:[true,"Username Already Exists"],
    },
    location:{
        type: String,
        
    },
    goals:{
        type:Array
    }
    
});


userSchema.pre("save",async function (next){
    if(!this.isModified("password")){
        next()
    }
    this.password=await bcrypt.hash(this.password,10);
});

userSchema.methods.getJWTToken= function(){
    return jwt.sign({id:this._id}, process.env.JWT_SECRET,{
        expiresIn: process.env.JWT_EXPIRE,
    })
};

//Compare password

userSchema.methods.comparePassword= async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password);
};


module.exports=mongoose.model("User",userSchema);
