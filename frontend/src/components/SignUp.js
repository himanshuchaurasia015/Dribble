import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router';
import { userContext } from '../context/userContext';

function SignUp() {

const navigate=useNavigate()

const values=useContext(userContext)


  const[name,setName]= useState("")
  const[username,setUsername]= useState("")
  const[email,setEmail]= useState("")
  const[password,setPassword]= useState("")
  const[isUnique,setUnique]=useState("hidden")
  const[submitText,setSubmitText]=useState("Create Account")
  const[err,setErr]=useState("")
 


useEffect(()=>{
const timerId=setTimeout(async()=>{

  if(username.length!==0){

     await axios
    .post("https://dribble-cxq4.onrender.com/api/v1/username", {username}).then((res)=>{
      if(res.status===200){
        setUnique("hidden")
        }
    }).catch((err)=>{
    if(err.response.status===401){
      setUnique("")
      }
    })

  }

},1000)
return ()=>{
  clearTimeout(timerId)
}

},[username])
const handleSubmit = async(e) => {
  e.preventDefault();
  const formData = {
    name,
    username,
    email,
    password,
  };
setSubmitText("Loading...")
  await axios
    .post("https://dribble-cxq4.onrender.com/api/v1/register", formData)
    .then((res) => {
      localStorage.setItem('token', res.data.token);
      values.setUser({...values.user,email})
        navigate("/createprofile");
    })
    .catch((err) => {
      setErr(err.message)
      setSubmitText("Create Account")
      console.log(err);
    });
   
};


  return (
    <>
    
    <div className="flex flex-col lg:flex-row lg:gap-20 lg:me-20 ">
      <p className='absolute right-8 top-8 lg:top-5'>Already a member? <span className='text-blue-800'>Sign In</span></p>
        <div className='lg:min-h-screen lg:flex lg:flex-col lg:justify-center lg:p-16 p-10  max-h-36 bg-yellow-200 '>
          <p className='text-2xl text-amber-900 font-bold mb-4 lg:mb-10'>Dribbble</p>
            <div className='text-2xl text-amber-900 font-bold'> <p className="">Discover the world's top Designers & Creatives.</p></div>
            <div><img src='image.png'className='opacity-30 lg:opacity-100 ' alt=""/></div>
        </div>
    <div className="flex flex-col  items-center lg:items-start  mx-10  lg:my-[70px]">
      <h1 className="text-2xl font-bold lg:ms-12">Sign up to Dribbble</h1>
      <div className={`text-xs lg:ms-12 text-red-500`}>{err}</div>

      <form className="space-y-6 relative lg:m-12" onSubmit={handleSubmit}>
      <div className={`${isUnique} absolute left-0 text-xs text-red-500`}>Username has already been taken</div>


         
          <div className='lg:flex lg:flex-row gap-5'> 
            <div className="flex flex-col ">

<label for="name" className="text-sm font-medium text-gray-700">Name</label>
<input type="text" id="name" name="name" required onChange={(e)=>{setName(e.target.value)}} value={name} className="lg:w-56 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-600" />
</div>
<div className="flex flex-col">
<label for="username" className="text-sm font-medium text-gray-700">Username</label>
<div className="">
  <input type="text" id="username" name="username" required onChange={(e)=>{setUsername(e.target.value)}} value={username} className="px-4 py-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-600" />
</div>
</div>
</div>
          <div className="flex flex-col">
            <label for="email" className="text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" name="email" required onChange={(e)=>{setEmail(e.target.value)}} value={email} className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-600" />
            
          </div>
          <div className="flex flex-col ">
            <label for="password" className="text-sm font-medium text-gray-700">Password</label>
            <input type="password" id="password" placeholder='Password' name="password" required onChange={(e)=>{setPassword(e.target.value)}} value={password} className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-600" />
          <div className={`${password.length<8?"":"hidden"}  left-0 bottom-0 mt-2 text-xs text-red-500`}>Password Should be more than 8 characters</div>

          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="terms" name="terms" required className="w-4 h-4 border border-gray-300 rounded focus:ring-1 focus:ring-blue-600" />
              <label for="terms" className="text-sm text-gray-700">Creating an account means you're okay with our Terms of Service, Privacy Policy, and our default Notification Settings.</label>
            </div>
          </div>
          <button type="submit" className="w-full lg:max-w-fit lg:px-16 lg:py-3 px-4 py-2 rounded-md bg-blue-600 text-center font-medium text-white shadow-sm hover:bg-blue-700" >{submitText}</button>
        </form><div className=' ms-12'><p className="">Already a member? <a href="/">Sign In</a></p>
      <p className="">This site is protected by reCAPTCHA and the Google <span className='text-blue-900'>Privacy Policy</span> and <span className='text-blue-950'>Terms of Service</span>  apply</p></div>
      
    </div>
  </div>
  </>
  )
}

export default SignUp
