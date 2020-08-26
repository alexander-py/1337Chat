import React, { useState, useEffect } from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';

import "./Chat.css";

function Chat() {

    const [input, setInput] = useState("");
    const [seed, setSeed] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    const sendMessage = (e) => {
        e.preventDefault();
        console.log("You typed --->>", input);

        setInput("");

    };

    return (
        <div className='chat'>
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>

                <div className="chat__headerInfo">
                    <h3>Room Name</h3>
                    <p>Last Seen at..</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>

            </div>

            <div className="chat__body">

            <p className={`chat__message ${true && 'chat__receiver'}`}>
                <span className="chat__name">Alexander</span>
                Hello homies

                <span className="chat__timestamp">
                    3:52pm
                </span>
                </p>
            


            </div>

            <div className="chat__footer">

                <InsertEmoticonIcon />
                <form>
                    <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a message" type="text" />
                        <button onClick={sendMessage} type="submit">Send a Message</button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat
