import './App.css';
import Chat from './components/Chat';
import SignIn from './components/SignIn';
import { getAuth } from "firebase/auth";
import {useAuthState} from 'react-firebase-hooks/auth'
import { app } from "./firebase";
function App() {
  const auth = getAuth(app);
  const [user] = useAuthState(auth)
  return (
   <>
   {user? <Chat/>: <SignIn/>}
   </>
  );
}

export default App;
