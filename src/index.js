import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import * as serviceWorker from './serviceWorker';
import Form from "./Form";


function Worker() {
    const [teams, setTeams] = useState("");
  
    const addNewTeam = team => {
      setTeams([...teams, team]);
    };
  
    return (
      <div className="App">
        <h1>Team Members</h1>
        <Form addNewTeam={addNewTeam} />
        <App TeamList={teams} />
      </div>
    );
  }


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();

export default Worker; 
