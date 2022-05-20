import React,{useState, useEffect, useRef} from 'react'
import SignOut from './SignOut'
import db from '../firebase'
import {  getAuth } from "firebase/auth";
import { app } from "../firebase";
import { collection, addDoc, getDocs, onSnapshot, setDoc, doc , query, orderBy, limit } from "firebase/firestore"; 
import SendMessages from './SendMessages';

export default function Chat() {
  const scroll = useRef();
  const [messages, setMessages] = useState([]);
  const auth = getAuth(app);
  useEffect(()=>{
    const collectionRef = collection(db, 'messages')
    const q = query(collectionRef, orderBy('timestamp','asc'),limit(50))// for timestamp ordering
    const unsub =  onSnapshot(q,(snapshot)=>{
      setMessages(snapshot.docs.map(doc=>({...doc.data(), id:doc.id})));
     })
     console.log(messages);
     return ()=>unsub()
    },[])
  return (
    <div>
      <SignOut/>
      <div className='msgs'>
      {messages.map((message)=>{
        const {id, photoURL, text, uid} = message;
        return(
          <div>
        <div key={id} className={`msg ${uid == auth.currentUser.uid ? 'sent' : 'received' }`}>
          <img src={photoURL}/>
          <p>{text}</p>
          </div>
          </div>
        )
      })}
      </div>
      <SendMessages scroll={scroll}/>
      <div ref={scroll}></div>
      </div>
  )
}
