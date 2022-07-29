import { Avatar, IconButton } from '@material-ui/core'
import React, { useEffect } from 'react'
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import {  useState } from 'react'
import "../css/Sidebar.css";
import SideChat from './SideChat';
import Addnewchat from './Addnewchat';
import db from '../firebase';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function Sidebar()
{
  const [rooms,setRooms]=useState([]);
  const navigate= useNavigate();

 const  nav=(id)=>{
   navigate(`/rooms/${id}`)
 }
  
  useEffect (()=>{
    db.collection("rooms").onSnapshot(snapshot=>{
      setRooms(snapshot.docs.map(doc=>({
        id:doc.id,
        data:doc.data()
      })))
    })
  },[])
  console.log(rooms)

  const createChat=()=>{
    const room =prompt("Please enter room name");

    alert(room)
    if(room){
      db.collection("rooms").add({
        name:room
      })
    }
  }
  return (
    <div className='sidebar'>

        <div className='sidebar_header'> 
        <Avatar/>


        <div className='sidebar_headerRight'> 
      <IconButton>
      <DonutLargeIcon/>
      </IconButton>

      <IconButton>
      <ChatIcon/>
      </IconButton>

      <IconButton>
      <MoreVertIcon />
      </IconButton>
        

        </div>
        </div>


      <div className='sidebar_search'>
      <div className='sidebar_searchContainer'>
        <SearchIcon/>
        <input  type="text" placeholder='Search or Start a new chat'/>
      </div>
      </div>
         <div className='sidebar_Chats '>
         <Addnewchat/>
         {
          rooms.map(room=>{
            return <div onClick={()=>{
              nav(room.id)
            }}><SideChat key={room.id} id={room.id} name={room.data.name}/></div>

          })
         }
         
         
         </div>
    </div>
  )
}

export default Sidebar;