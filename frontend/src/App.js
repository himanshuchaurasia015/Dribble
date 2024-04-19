import React from 'react'
import { useState } from "react";
import ProfileCreation from "./components/ProfileCreation";
import SignUp from "./components/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WhatBringsYou from "./components/WhatBringsYou";
import Verify from "./components/Verify";
import {userContext} from "./context/userContext"
import {authContext} from "./context/authContext"


function App() {
  

  const [user, setUser] = useState({});
  const [auth, setAuth] =useState(false)
  const [profile, setProfile] = useState();


  return (
    <authContext.Provider values={{auth,setAuth}}>
    
    <userContext.Provider value={{user,setUser,profile,setProfile}}>
    <Router>
      <Routes>
        <Route exact path="/" element={<SignUp/>}/>
        <Route exact path="/createprofile" element={<ProfileCreation/>}/>
        <Route exact path="/goal" element={<WhatBringsYou/>}/>
        <Route exact path="/verify" element={<Verify/>}/>
    </Routes>
    </Router>

    </userContext.Provider>
    </authContext.Provider>

  );
}

export default App;
