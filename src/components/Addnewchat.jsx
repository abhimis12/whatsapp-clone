import React, { useEffect, useState } from 'react'
import "../css/Sidebar.css";
import db from '../firebase';
function Addnewchat() {
  const [rooms,setRooms]=useState([])
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
    <div className='sidebar__chat' onClick={createChat}>
        <div className='sidebar__chatInfo' >
       <h3> Add  new  chat</h3>
        </div>
    </div>
    
  )
}

export default Addnewchat