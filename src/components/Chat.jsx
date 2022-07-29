import { Avatar, IconButton } from '@material-ui/core'
import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import AttachmentIcon from '@mui/icons-material/Attachment';
import MicIcon from '@mui/icons-material/Mic';

import React, { useEffect } from 'react'
import "../css/Chat.css";
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import db from '../firebase';
export const Chat = () => {
    const {roomId}= useParams();
    const[roomName,setRoomName]=useState("")
    const[input, setInput]=useState("")
    useEffect(()=>{
           db.collection("rooms").doc(roomId).onSnapshot(snapshot=>{
            setRoomName(snapshot.data().name);
           })
    },[roomId])
    console.log(roomId)


    // const sendMessage=(e)=>{
    //     e.preventDefault();
    //     if(input ===""){
    //       return alert("Please inter msg")
    //     }
    //     db.collection("rooms").doc(roomId).collection("message").add({
    //         name:"abhishek",
    //         message:input,
    //         timestamp:firebase.firestore.FeildValue.serverTimestamp()
    //     });
    //     setInput("")
    // }


  return (
    <div   className='Chat'>
        <div  className='Chat_header'>
          <Avatar/>
          
              <div  className='Chat_headerInfo'>
                  <h3>{roomName}</h3>
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
            {/* onSubmit = {sendMessage} */}
           <form >
           <input type="text" value={input} placeholder='Type the text'/>
        {/* //    onChange={e=> setInput(e.target.value) */}
    
            <input type="submit"/>
           </form>
            <MicIcon/>
        </div>
        
        </div>
  )
}
