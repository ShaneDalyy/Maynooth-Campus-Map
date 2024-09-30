import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from "../../firebase";
import styled from "styled-components"

const Body = styled.body`
  min-height: 100vh;
  background-image: linear-gradient(to bottom right, #8EC3B0, #9ED5C5, #BCEAD5, #DEF5E5);
  background-size: cover;
//   background-repeat: no-repeat;
  background-position: center center;
  display: flex;
//   align-items: center;
  justify-content: center;
  text-align: center;
`;

const SignUpContainer = styled.div`
  min-height: 100%;
//   background-image: linear-gradient(to bottom right, #8EC3B0, #9ED5C5, #BCEAD5, #DEF5E5);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;

const FormGroup = styled.div`
  color: rgb(255, 139, 139);
  font-size: 25px;
  text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black;
  margin-bottom: 20px; /* Adjust spacing between input groups */
  algin-content: center;
//   text-align: center;
`;

const SubmitButton = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: 2px solid #000000;
  border-radius: 5px;
  font-size: 20px;

  &:hover {
    background-color: #45a049;
  }
`;

const Input = styled.input`
//   display: block;
//   align-items: center;
`;

const Label = styled.label`
//   display: absolute;
  margin-right: 10px;
`

const SignUp = ( {renderShowSignIn} ) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const signUp = (e) => {
    // On page reload, prevent email and password fields from being wiped
    e.preventDefault();

    // Check to make sure password and confirm password match
    if (password !== repeatPassword) {
      alert('Passwords do not match');
      return;
    }

    alert('Sign up successful!')

    // Create a new user with email/password
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((err) => {
        console.log(err);
      });

      // Bring user to dashboard page
      window.location.href = "/";
  };

  return (
    <Body>
      <div className="container mx-auto">
        <SignUpContainer>
          <h1 className="text-center">Welcome to College Compass</h1>
          <form onSubmit={signUp}>
            <FormGroup>
              <Label htmlFor="email">Email Address:</Label>
              <Input type="email" id="email" name="email" required placeholder="Your email address" value={email} onChange={(e) => setEmail(e.target.value)} />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">Password:</Label>
              <Input type="password" id="password" name="password" required placeholder="Your password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="confirmPassword">Confirm Password:</Label>
              <Input type="password" id="confirmPassword" name="confirmPassword" required placeholder="Confirm your password" value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} />
            </FormGroup>
            <SubmitButton type="submit">Sign Up</SubmitButton>
          </form>

          <button onClick={renderShowSignIn}>Log in Instead</button>
        </SignUpContainer>
      </div>
    </Body>
  );
};

export default SignUp;