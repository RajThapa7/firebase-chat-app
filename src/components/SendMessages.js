import { Button, Input } from '@material-ui/core'
import React,{useState} from 'react'
import { signInWithPopup, GoogleAuthProvider, getAuth } from "firebase/auth";
import { app } from "../firebase";
import { collection, addDoc, getDocs, onSnapshot, setDoc, updateDoc, doc, deleteDoc, query, where, serverTimestamp  } from "firebase/firestore"; 
import db from '../firebase'
import '../App.css'

export default function SendMessages({scroll}) {
    const auth = getAuth(app);
  const [msg, setMsg] = useState('');
  const sendMessage = async(e)=>{
e.preventDefault();
const {uid, photoURL} = auth.currentUser
const collectionRef = collection(db, 'messages');
const payload = {text:msg,photoURL, uid,timestamp: serverTimestamp()}
  const docRef = await addDoc(collectionRef, payload);
setMsg('')
scroll.current.scrollIntoView({ behavior: 'smooth' })
  }
  return (
<>
<form style={{position:'fixed', bottom:'2%',left:'25%'}}>
    <Input variant = 'contained' placeholder='Messages...' onChange={(e)=> setMsg(e.target.value)} value={msg} style={{border:'2px solid #395DFF', padding:'0.5rem', borderTopLeftRadius:'1rem',borderTopRightRadius:'1rem', backgroundColor:'#ccdbf9', color:'black'}}/>
    <Button onClick={sendMessage} style={{backgroundColor:'#395DFF', color:'white', marginLeft:'1rem'}}>Send</Button>
</form>
</>  )
}
