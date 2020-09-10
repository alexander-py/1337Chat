import React, { useEffect, useState } from 'react';
import { Avatar } from "@material-ui/core";
import db from "./firebase";
import { Link } from "react-router-dom";
import'./SidebarChat.css';

function SidebarChat({ id, name, addNewChat }) {

    const [seed, setSeed] = useState("");
    const [messages, setMessages] = useState("");

    useEffect(() => {
        if (id) {
            db.collection('Rooms').doc(id).collection('messages').orderBy('timestamp', 'desc').onSnapshot((snapshot) =>
                setMessages(snapshot.docs.map((doc) => 
                doc.data()))
            );
        }

    }, [id]);



    useEffect(() => {

        setSeed(Math.floor(Math.random() * 5000));

    }, [])

    const createChat = () => {
        const roomName = prompt("Please Enter a Name for the Chat Room.");

        if (roomName) {
            // do some clever stuff in db
            // don't forget capital R for rooms lol off
            
            db.collection('Rooms').add({
                name: roomName,

            });
        }
    };
        

    {/* add a non-refreshing click to new rooms*/}


    return !addNewChat ?  (
        <Link to={`/rooms/${id}`}>
            <div className="sidebarChat">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className="sidebarChat__info">
                    <h2>{name}</h2>
                    <p>{messages[0]?.message}</p>
                </div>
            </div>
        </Link>
    ): (
        <div onClick={createChat}
        className="sidebarChat">
            <h2>Add New Chat</h2>
        </div>
    );
}

export default SidebarChat
