import React, { useState } from 'react';
import ReactDOM from 'react-dom';

export default function Person_List (props) {

console.log("props",props);
console.log("props.people[0].name", props.people)

    return(
        <section className="people_container">

            {props.people.map((person)=>(
                <div className="person" key={person.id}>
                    <h2>{person.name}</h2>
                    <h3>ID# {person.id}</h3>
                    <p>@: {person.email}</p>
                    <p>Role: {person.role}</p>
                    <p>Eye Color: {person.eyes}</p>

                    </div>
            ))}
            
        </section>
    )
}