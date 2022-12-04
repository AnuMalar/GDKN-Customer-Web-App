import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import { IconButton, Avatar } from "@mui/material";
import { useStateValue } from "../context/StateProvider";
import SidebarChat from "../SidebarChat/SidebarChat";
import axios from "axios";


import {
    DonutLarge,
    Chat,
    MoreVert,
    SearchOutlined,

  } from "@mui/icons-material";

    const Sidebar = () => {
      const [rooms, setRooms] = useState([]);
      const [{ user }] = useStateValue();
    
      useEffect(() => {
        axios.get(`http://localhost:2000/all/rooms`).then((response) => {
          setRooms(response.data);
        });
      }, []);
    
         

  


  return (
    <div className="sidebar">
        <div className="sidebar__header">
            <Avatar src={user.photoURL} />
            <div className="sidebar__headerRight">
            {/* <IconButton>
                <DonutLarge />
            </IconButton>  
            <IconButton>
            <Chat />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>       */}
            </div>
        </div>
        <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input type="text" placeholder="Search a customer" />
        </div>
      </div>
      <div className="sidebar__chats">
        <SidebarChat addNewChat />
        {rooms.map((room) => (
          <SidebarChat key={room._id} id={room._id} name={room.name} />
        ))}
       

        
      </div>
    </div>
  )
}

export default Sidebar;
