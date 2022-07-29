import { Avatar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import "../css/Sidebar.css";
function SideChat({id,name}) {
    const [seed,setseed]=useState("");
    useEffect(()=>{
         setseed(Math.floor(Math.random()*5000))
    },[])
  return (
<>
    <div className='sidebar__chat'>
    
      
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
        <div className='sidebar__chatInfo'>
                 <div> <h1>{name}</h1></div>
                 <p>Last Msg...</p>
 
        </div> 
        
      
    </div>
    </>
  )
}

export default SideChat