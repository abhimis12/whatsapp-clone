import { Avatar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'

import "../css/Sidebar.css";
function SideChat(addnewchat) {
    const [seed,setseed]=useState("");
    useEffect(()=>{
         setseed(Math.floor(Math.random()*5000))
    },[])
  return (

    <div className='sidebar__chat'>
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
        <div className='sidebar__chatInfo'>
                 <h1>React</h1>
                 <p>Last Msg...</p>
 
        </div> 
    </div>
    
  )
}

export default SideChat