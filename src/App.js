import React from 'react';
import './App.css';
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (

    //bem naming convention
    <div className="app">
      <div className="app__body">
        <Router>
          <Sidebar />

          <Switch>

            {/*wild card*/}
            {/*show comment section
            only when we have a roomId*/}
            <Route path="/rooms/:roomId"> 



                {/*add sidebar here*/}
                {/*<Sidebar />*/}
                {/*add chat*/}


              <Chat />
            </Route>
            <Route path="/">
              <Chat />
            </Route>
          </Switch>
        </Router>

      </div>

    </div>
  );
}

export default App;
