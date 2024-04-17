import React, { useContext, useState } from 'react';
import axios from 'axios';
import ImagePreview from './ImagePreview';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import { useNavigate } from 'react-router';
import { userContext } from '../context/userContext';

const ProfileCreation = () => {
  const values=useContext(userContext)
  const navigate=useNavigate()
  const [avatar, setAvatarImage] = useState(null);
  const [location, setLocation] = useState('');
  const [dataUri, setDataUri] = useState('');
  const [file,setFile]=useState(null)
  const [camera, setCamera] = useState("hidden");

const handleSubmit=async(e)=>{

  const formData = new FormData();
  formData.append('avatar', file);
  formData.set("location",location)
 
 

  try {
    const response = await axios.put('http://localhost:4000/api/v1/me/img', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': localStorage.getItem('token'),
      },
    }).then((res)=>{
      if(res.status===200){
        navigate("/goal")
values.setProfile(avatar)


      }
    });
    // console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}


  function handleTakePhotoAnimationDone (dataUri) {
    console.log('takePhoto');
    setCamera("hidden")
    setAvatarImage(dataUri)
    setDataUri(dataUri);
  }

  const isFullscreen = false;
  const handleAvatarUpload = (e) => {
    const upfile = e.target.files[0];
  setFile(upfile)

    setAvatarImage(URL.createObjectURL(upfile));
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };
 
  

  return (
    <div className="flex flex-col lg:items-start gap-5 md:ms-[30%] items-center justify-center min-h-screen bg-white">
      <h1 className="text-3xl font-bold mb-8 text-pink-500 text-center  md:text-4xl">
        Welcome! Let's create your profile
      </h1>
      <p className="text-gray-600 mb-8 text-center md:text-lg">
        Let others get to know you better! You can do these later
      </p>

      <div className="flex flex-col md:flex-row items-center mb-8 gap-5">
        <div className="relative w-32 h-32 md:w-48 md:h-48 mb-4 border-4 border-dashed border-gray-400 rounded-full">
          {avatar ? (
            <img
              src={avatar}
              alt="Avatar"
              className="w-full h-full rounded-full object-cover"
            />
          ) : (
  
  <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-gray-400 text-4xl md:text-6xl " onClick={()=>{camera==="block"||avatar?setCamera("hidden"):setCamera("block")}}>+</span>
            </div>
          )}
        </div>
        <div className={`${camera}`}>
      {
        (dataUri)
          ? <ImagePreview dataUri={dataUri}
            isFullscreen={isFullscreen}
          />
          : <Camera  onTakePhotoAnimationDone = {handleTakePhotoAnimationDone}
            isFullscreen={isFullscreen}
          />
      }
    </div>
       
        <div className="">
           <label htmlFor="choose-image" className="text-sm text-gray-500 bg-white cursor-pointer md:text-base text-center border px-3 py-1 rounded-md ">
          Choose image
        </label>
        <input 
          type="file"
          name="avatar"
          id="choose-image"
          className="hidden"
          accept="image/*"
          onChange={handleAvatarUpload}
        />
        <p className="text-sm text-gray-500 md:text-base">Or choose one of our defaults</p></div>
      </div>

      <div className="mb-8 w-full md:w-1/2">
        <p className="text-gray-600 mb-2 text-lg md:text-xl">Add your location</p>
        <input
          type="text"
          placeholder="Enter a location"
          value={location}
          onChange={handleLocationChange}
          className="px-4 py-2 border-b border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 w-full"
        />
      </div>

      <button onClick={handleSubmit} className={`${location && avatar?"bg-pink-500 hover:bg-pink-600": "disable bg-pink-300" } text-white px-6 py-3 rounded-md  transition-colors duration-300 text-lg md:text-xl`} >
        Next
      </button>
    </div>
  );
};

export default ProfileCreation;