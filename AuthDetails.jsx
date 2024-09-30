import React, { useEffect, useState } from "react";
import {auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if(user){
                setAuthUser(user)
            } else {
                setAuthUser(null);
            }
        })

        return () => {
            listen();
        }

    }, [])
    
    const userSignOut = () => {
        signOut(auth).then(() => {
            alert("Signed out sucessfully");
        }).catch(err => console.log(err));
    }

    return (
        <div>
            { authUser ? 
            <>  {`${authUser.email}`}   <button onClick={ userSignOut }>Sign Out</button>    </> 
                : 
                <a href="/signin">Sign In</a >}
        </div>
    )
}

export default AuthDetails;