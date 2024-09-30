import React, { useState } from 'react';
import SignIn from './Components/Authorisation/SignIn';
import SignUp from './Components/Authorisation/SignUp';
import AuthDetails from './Components/AuthDetails';
// import styled from "styled-components"
import CampusDashboard from './DashBoardPages/CampusDashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // For routing

function App(){
  const [showSignIn, setShowSignIn] = useState(true);
  const [showSignUp, setShowSignUp] = useState(false);

  // Handles the rendering of the sign in and sign up components
  const renderShowSignIn = () => {
    setShowSignIn(true);
    setShowSignUp(false);
  }
  const renderShowSignUp = () => {
    setShowSignIn(false);
    setShowSignUp(true);
  }

  return (
    showSignIn ? ( 
      <SignIn renderShowSignUp={renderShowSignUp}/> 
    ) : ( 
      <SignUp renderShowSignIn={renderShowSignIn}/> 
    )
);

// Testing routing from within App.js, probably remove later
// return (
//     // <Router>
//     //   <div>
//     //     <Routes>
//     //       <Route path="/" 
//     //           element={ 
//                 showSignIn ? ( 
//                   <SignIn renderShowSignUp={renderShowSignUp}/> 
//                 ) : ( 
//                   <SignUp renderShowSignIn={renderShowSignIn}/> 
//                 )
//     //           } />

//     //         {/* This renders the dashboard page */}
//     //       <Route path="/dashboard" element={<CampusDashboard/>}/>
//     //     </Routes>
//     //   </div>
//     // </Router>
//   );
}

export default App;