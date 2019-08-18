import React, { useState } from "react";
import "./App.css";

const Form = props => {
    console.log(props);
    const [team, setTeam] = useState({ name: "", email: "", role:""});

    const changeHandler = event => {
        setTeam({...team, [event.target.name]: event.target.value});
    };

    const submitForm = event => {
        event.preventDefault();
        setTeam({name:"", email:"", role:""});
        console.log(team.name);
        console.log(team.email);
        console.log(team.role);
        //const newTeam = {
          //  ...team, 
            //id: Date.now()
        };
        //props.addNewTeam(newTeam)
    //};

    return (
        <div className = "App">
        <form onSubmit={event => submitForm(event)}>
            <label htmlFor ="name">Name</label>
            <input
            type ="text"
            name="name"
            placeholder ="Name"
            value={team.name}
            onChange={event => changeHandler(event)}
        />

        <label htmlFor="email">Email</label>
        <input
            type = "text"
            name = "email"
            placeholder = "Email"
            value={team.email}
            onChange={event => changeHandler(event)}
/>
            <label htmlFor="role">Role</label>
            <input
                type = "text"
                name = "role"
                placeholder = "Role"
                value={team.role}
                onChange={event =>changeHandler(event)}
        />
        <button type = "submit">Submit</button>
        </form>
        </div>
    );
};

export default Form; 
