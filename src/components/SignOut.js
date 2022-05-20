import { Button } from '@material-ui/core'
import React from 'react'
import { getAuth, signOut } from 'firebase/auth';
import { app } from '../firebase';
export default function SignOut() {
    const auth = getAuth(app);
  return (
<>
<Button onClick={()=>signOut(auth)} style={{backgroundColor:'#e74718', position:'fixed', top:'10px', left:'10px', color:'white'}}>Sign Out</Button>
</>

    )
}
