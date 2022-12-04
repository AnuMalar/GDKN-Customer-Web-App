import React, { useEffect, useState } from "react";
import "./Details.css";
import { Avatar, IconButton } from "@mui/material";
import {useParams} from 'react-router-dom'
import {
  
  ContactMailRounded,
  EmailOutlined,
  Phone,
} from "@mui/icons-material";
import axios from "axios";
import { useStateValue } from "../context/StateProvider";
// import Pusher from "pusher-js";


const Details = () => {
  const [seed, setSeed] = useState("");
  // const [input, setInput] = useState("");
  const { roomId } = useParams();
  const [roomName, setRoomName] = useState("");
  const [messages, setMessages] = useState([]);
  const [updatedAt, setUpdatedAt] = useState(new Date());
  const [{ user }] = useStateValue();

//using useeffect create the rrom id for the specific user
  useEffect(() => {
    if (roomId) {
      axios.get(`http://localhost:2000/room/${roomId}`).then((response) => {
        setRoomName(response.data.name);
        setUpdatedAt(response.data.updatedAt);
      });
      axios.get(`http://localhost:2000/messages/${roomId}`).then((response) => {
        setMessages(response.data);
      });
    }
  }, [roomId]);



  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);




  return (
    <div className="details">
      <div className="details__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />

        <div className="details__headerInfo">
        <h3>{roomName ? roomName :"Customer Details"}</h3>
        </div>

        <div className="details__headerRight">
          <IconButton>
            <ContactMailRounded />
          </IconButton>
          <IconButton>
            <EmailOutlined />
          </IconButton>
          <IconButton>
            <Phone/>
          </IconButton>
        </div>
      </div>
      <div className="details__body">
        {/* <p className="details__message">
          <span className="details__name">anu</span>
          Hello from anu
          <span className="details__timestamp">
              {new Date().toString().slice(0, 25)}
            </span>
        </p>
        <p className="details__message details__receiver">
          <span className="details__name">janu</span>
          Hello from janu
          <span className="details__timestamp">
              {new Date().toString().slice(0, 25)}
            </span>
        </p> */}
      </div>
    </div>
  )
}

export default Details
