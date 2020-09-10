import React, { useState, useEffect } from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import { useParams } from "react-router-dom";
import db from "./firebase";
import firebase from "firebase";
import { useStateValue } from "./StateProvider";


import "./Chat.css";

function Chat() {

    const [input, setInput] = useState("");
    const { roomId } = useParams();
    const [{ user }, dispatch] = useStateValue();

    {/* fetch room name func */}

    const [roomName, setRoomName] = useState(""); 
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if (roomId) {
            db.collection('Rooms').doc(roomId).onSnapshot(snapshot => (
                setRoomName(snapshot.data().name)
            ));

            db.collection('Rooms').doc(roomId).collection('messages').orderBy('timestamp','asc').onSnapshot(snapshot => (
                setMessages(snapshot.docs.map(doc => doc.data()))
            ))
        }

    }, [roomId])


    const sendMessage = (e) => {
        e.preventDefault();
        console.log("You typed --->>", input);


        {/*initialize all new messages when
        they have been eneterd
            *****user.displayName is coming from
            google authentication
        also use server time not local timezones
            UK users will see UK time 
            US users will se US time*/}

        db.collection('Rooms').doc(roomId).collection('messages').add({
            message: input,
            name:  user.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });

        setInput("");

    };

    return (
        <div className='chat'>
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${Math.floor(Math.random() * 5000)}.svg`}/>

                <div className="chat__headerInfo">

                    {/*now when you click on a different room
                    it will show the name of the room thanks to the roomname func*/}
                    
                    <h3>{roomName}</h3>
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
                {messages.map(message => (
                    <p 

                    /*we need to make OP messages different
                    than other people's messages
                    
                    as in the color will be different*/


                        className={`chat__message ${
                            message.name === user.displayName && 'chat__receiver'}`}>

                        {/*cast message names and message output*/}


                        <span className="chat__name">{message.name}</span>
                            {message.message}
                
                        <span className="chat__timestamp">
                            {new Date(message.timestamp?.toDate()).toUTCString()}
                        </span>
                    </p>

                ))}


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
