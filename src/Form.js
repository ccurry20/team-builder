import React from 'react';
import './App.css';




const Teams = props => {
  return (
    <div>
            <h2>{props.name}</h2>
            <p>{props.email}</p>
            <p>{props.role}</p>
          </div>
        );
};

export default Teams;