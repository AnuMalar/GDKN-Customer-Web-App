import React, { useState, useEffect } from "react";

import "./SidebarChat.css";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";


    const SidebarChat = ({ addNewChat, id, name }) => {
        const [seed, setSeed] = useState("");
      
        useEffect(() => {
          setSeed(Math.floor(Math.random() * 5000));
        }, []);
  
//to add a new user (customer)

        const createChat = async () => {
          const roomName = prompt("Add a new customer");
          if (roomName) {
            try {
              await axios.post("http://localhost:2000/group/create", {
                groupName: roomName,
              });
            } catch (err) {
              console.log(err);  
            }
          }
        };
      
        return !addNewChat ? (
          <Link to={`/rooms/${id}`}>
            <div className="sidebarChat">
              <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
              <div className="sidebarChat__info">
                <h2>{name}</h2>
              </div>
            </div>
          </Link>
        ) : (
          <div onClick={createChat} className="sidebarChat">
            <h2>Add new Customer</h2>
          </div>
        );
      };
    
    export default SidebarChat;
    