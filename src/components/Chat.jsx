import { Avatar, IconButton } from '@material-ui/core'
import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import AttachmentIcon from '@mui/icons-material/Attachment';
import MicIcon from '@mui/icons-material/Mic';

import React from 'react'
import "../css/Chat.css";
export const Chat = () => {
  return (
    <div   className='Chat'>
        <div  className='Chat_header'>
          <Avatar/>
              <div  className='Chat_headerInfo'>
                  <h3>Room name</h3>
                  <p>Last seen</p>
               </div>

               <div  className='header_right'>
                <IconButton>
                    <SearchIcon/>
                </IconButton>
                <IconButton>
                    <AttachFileIcon/>
                </IconButton>
                <IconButton>
                    <MoreVertIcon/>
                </IconButton>
                </div>
               
        </div>
        <div className='Chatbody'>
            <p className='Chatmsg  chatreciver'>
                <span className='Chatname'>Abhishek</span>
                This is a text Msg
                <span className='Chattime'>12:40AM</span>
            </p>
            <p className='Chatmsg  chatreciver'>
                <span className='Chatname'>Abhishek</span>
                This is a text Msg
                <span className='Chattime'>12:40AM</span>
            </p>
            <p className='Chatmsg  chatreciver'>
                <span className='Chatname'>Abhishek</span>
                This is a text Msg
                <span className='Chattime'>12:40AM</span>
            </p>
            <p className='Chatmsg'>
                <span className='Chatname'>Abhishek</span>
                This is a text Msg
                <span className='Chattime'>12:40AM</span>
            </p>
           
         </div>
        
 
        <div className='Chatfooter'>
            <EmojiEmotionsIcon/>
            <AttachmentIcon/>
           <form>
           <input type="text" placeholder='Type the text'/>
            <input type="submit"/>
           </form>
            <MicIcon/>
        </div>
        
        </div>
  )
}
