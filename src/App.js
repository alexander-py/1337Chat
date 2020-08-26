import React from 'react';
import './App.css';
import Sidebar from "./Sidebar";
import Chat from "./Chat";

function App() {
  return (

    //bem naming convention
    <div className="app">



      <div className="app__body">
        
        {/*add sidebar here*/}
        <Sidebar />
        {/*add chat*/}
        <Chat />

      </div>

    </div>
  );
}

export default App;
