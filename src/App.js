
import './App.css';
import Sidebar from '../src/components/Sidebar';
import { Chat} from '../src/components/Chat';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { useEffect, useState } from 'react';
import { Login } from './components/Login';
import { Create } from './components/Create';
function App() {
  
  const [user,setUser]=useState(null)
  
 useEffect(()=>{
  setUser(localStorage.getItem("abhi"))
  console.log(localStorage.getItem("abhi"))
 },[])
  console.log(user)

  return (
    user ? 

    <>
   
    <div className="App">
       <div className="app_body">
       <Sidebar/>
    
    <Routes>
      
      <Route excat path="/"  element={<Chat/>}/> 
      <Route path="/rooms/:roomId"  element={<Chat/>}/>  
      
    </Routes>

  
    </div>
   
    </div>
    
</>:<Login/>
  );
}

export default App;
