import React from "react";
import Button from "@material-ui/core/Button";
import { signInWithPopup, GoogleAuthProvider, getAuth } from "firebase/auth";
import { app } from "../firebase";
import SendMessages from "./SendMessages";
import { FcGoogle, FcFlashOn } from "react-icons/fc";
export default function SignIn() {
  const auth = getAuth(app);
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };
  return (
    <div>
      <h1><FcFlashOn/><FcFlashOn/><FcFlashOn/>&nbsp;<span style={{color:'#e0591f'}}>Fire</span>&nbsp;<span style={{color:'#1FA6E0'}}>Chat</span>&nbsp;<FcFlashOn/><FcFlashOn/><FcFlashOn/></h1>
      <p style={{margin:'0px auto', color:'#32CD7A'}}>where Wierdo meets Creep</p>
      <Button onClick={signInWithGoogle} style={{position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)', backgroundColor:'orange', padding:'0.5rem', color:'white', fontWeight:'bold'}}> <FcGoogle style={{fontSize:'1.5rem', marginRight:'0.5rem'}}/> Sign in with Google</Button>
    </div>
  );
  <SendMessages/>
}
