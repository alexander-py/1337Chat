import React, { useEffect, useState } from 'react';
import { Avatar } from "@material-ui/core";
import'./SidebarChat.css';

function SidebarChat({ id, name, addNewChat }) {

    const [seed, setSeed] = useState("");

    useEffect(() => {

        setSeed(Math.floor(Math.random() * 5000));

    }, [])

    const createChat = () => {
        const roomName = prompt("Please Enter a Name for the Chat.");

        if (roomName) {
            // do some clever stuff in db
        }
    };
        
    return !addNewChat ?  (
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className="sidebarChat__info">
                <h2>{name}</h2>
                <p>Last Message..</p>
            </div>
        </div>
    ): (
        <div onClick={createChat}
        className="sidebarChat">
            <h2>Add New Chat</h2>
        </div>
    );
}

export default SidebarChat
