import { Avatar, IconButton } from '@material-ui/core'
import React from 'react'
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';

import "../css/Sidebar.css";
import SideChat from './SideChat';
import Addnewchat from './Addnewchat';
function Sidebar() {
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
         <SideChat/>
         <SideChat/>
         <SideChat/>
         <SideChat/>
         <SideChat/> 
         </div>
    </div>
  )
}

export default Sidebar