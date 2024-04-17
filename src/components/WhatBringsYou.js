import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import { userContext } from '../context/userContext';

const WhatBringsYou = () => {

const values=useContext(userContext)

const navigate=useNavigate()
const [goals,setGoals]= useState([])


function chkbox(e) {
  const s = e.target.value;
  let newGoals = [...goals];

  if (e.target.checked) {
    if (!newGoals.includes(s)) {
      newGoals.push(s);
    }
  } else {
    newGoals = newGoals.filter((goal) => goal !== s);
  }

  setGoals(newGoals);
}


const handleSubmit=async(e)=>{
 values.setUser({...values.user,goals})
console.log(values.user)
 const formData = new FormData();
  formData.set("goals",goals)

  try {
    const response = await axios.put('http://localhost:4000/api/v1/me/update', values.user, {
      headers: {
        // 'Content-Type': 'multipart/form-data',
        'Authorization': localStorage.getItem('token'),
      },
    }).then((res)=>{
      if(res.status===200){
        navigate("/verify")

      }
    });
  } catch (error) {
    console.error(error);
  }
}


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="flex items-center mb-8">
        <button className="bg-gray-200 text-gray-600 rounded-full p-2 hover:bg-gray-300 transition-colors">
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        </button>
        <h1 className="text-2xl font-bold ml-4 text-pink-500">
          What brings you to Dribbble?
        </h1>
      </div>
      <p className="text-gray-600 mb-8 text-center md:text-lg">
        Select the options that best describe you. Don't worry, you can explore
        other options later.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <label className="flex flex-col items-center">
          <img
            src="/designer-share-work.svg"
            alt="Designer Share Work"
            className="w-32 h-32 mb-4"
          />
          <p className="text-gray-600 text-center">
            I'm a designer looking to share my work
          </p>
          <div className="mt-4">
            <input
              onChange={chkbox}
              type="checkbox"
              name="purpose"
              value="share-work"
              className="form-checkbox text-pink-500 focus:ring-pink-500"
            />
          </div>
        </label>

        <label className="flex flex-col items-center">
          <img
            src="/hire-designer.svg"
            alt="Hire Designer"
            className="w-32 h-32 mb-4"
          />
          <p className="text-gray-600 text-center">
            I'm looking to hire a designer
          </p>
          <div className="mt-4 flex">
            <input
              onChange={chkbox}
              type="checkbox"
              name="purpose1"
              value="hire-designer"
              className="form-checkbox text-pink-500 focus:ring-pink-500 rounded-full"
            />
          </div>
        </label>

        <label className="flex flex-col items-center">
          <img
            src="/design-inspiration.svg"
            alt="Design Inspiration"
            className="w-32 h-32 mb-4"
          />
          <p className="text-gray-600 text-center">
            I'm looking for design inspiration
          </p>
          <div className="mt-4">
            <input
              onChange={chkbox}
              type="checkbox"
              name="purpose2"
              
              value="design-inspiration"
              className="form-checkbox text-pink-500 focus:ring-pink-500"
            />
          </div>
        </label>
      </div>

      <button onClick={handleSubmit} className="bg-pink-500 text-white px-6 py-3 rounded-md hover:bg-pink-600 transition-colors duration-300 text-lg md:text-xl">
        Finish
      </button>
    </div>
  );
};

export default WhatBringsYou;