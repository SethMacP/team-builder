import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import ReactDOM from 'react-dom';
import styled from 'styled-components'

export default function Person_Add (props) {
    //holding the state of the current person
    const [person, setPerson] = useState({
        id:   "",
        name: "",
        email: "",
        role: "",
        eyes: "",
    });
    //update only the fields with entries
    const handleChanges = (event) => {
        setPerson( {...person, [event.target.name]: event.target.value } ) 
    }
    //prevent submit button from refreshing page, instead update state
    const submitForm = (event) => {
        event.preventDefault();
        props.addNewPerson(person);
        setPerson({
            id:   "",
            name: "",
            email: "",
            role: "",
            eyes: "",
        })
    }
    //return the form I want to show at top of page
    //read the names in white to know which field they are for
    return(
        <form onSubmit={submitForm}>
            <h3>Add a new person!</h3>
            <FormGroup>
                <label htmlFor="name">Name: </label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="full name"
                    value={person.name}
                    onChange={handleChanges}
                    
                    />
            </FormGroup>
            <FormGroup>
            <label htmlFor="name">Email: </label>
            <input
                id="email"
                name="email"
                type="text"
                placeholder="email@"
                value={person.email}
                onChange={handleChanges}
                
                />
            </FormGroup>
            <FormGroup>
            <label htmlFor="name">Role: </label>
            <input
                id="role"
                name="role"
                type="text"
                placeholder="role"
                value={person.role}
                onChange={handleChanges}
                
                />
            </FormGroup>
            <FormGroup>
            <label htmlFor="name">Eyes: </label>
            <input
                id="eyes"
                name="eyes"
                type="text"
                placeholder="eye color"
                value={person.eyes}
                onChange={handleChanges}
                
                />
            </FormGroup>
            <Button type="submit"> Add Me!</Button>
        </form>
    )
}