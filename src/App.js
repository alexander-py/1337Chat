import React from 'react';
import './App.css';
import Sidebar from "./Sidebar";

function App() {
  return (

    //bem naming convention
    <div className="app">



      <div className="app__body">
        
        {/*add sidebar here*/}
        <Sidebar />
        {/*add chat*/}

      </div>

    </div>
  );
}

export default App;
