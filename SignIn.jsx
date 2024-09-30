import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
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

const SignInContainer = styled.div`
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

const SignIn = ( {renderShowSignUp} ) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        // todo: sign in
        e.preventDefault(); 

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential)
                
                // Bring user to dashboard page
                window.location.href = "/";
            })
            .catch((err) => {
                // console.log(err)
                alert("Incorrect Email/Password combination")
            })
    }
    
    return (
        <Body>
            <div className="sign-in-container">
                <signInContainer>
                <h1 className="text-center">Welcome to College Compass</h1>
                <form onSubmit={signIn}>
                    <FormGroup>
                        <Label htmlFor="email">Email Address:</Label>
                        <Input type="email" id="email" name="email" required placeholder="Your email address" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="password">Password:</Label>
                        <Input type="password" id="password" name="password" required placeholder="Your password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </FormGroup>
                    <SubmitButton type="submit">Log In</SubmitButton>
                </form>
                <button onClick={renderShowSignUp}>Register Instead</button>
            </signInContainer>
            </div>
        </Body>
    )
}

export default SignIn;