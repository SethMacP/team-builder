import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Person_Add from './Components/Person_Add'
import Person_List from './Components/Person_List'
// import styled from 'styled-components'
import data from './data';
import './App.css';


function App() {

  const [ people , setPeople ] = useState(data);
//[success]console.log(people);

  const addNewPerson = (person) => {
    const newPerson = {
      id: Date.now(),
      name: person.name,
      email: person.email,
      role : person.role,
      eyes : person.eyes
    }
    setPeople([newPerson,...people])
  }



  return (
  <div>
    <header>
      <h1>The Roster</h1>

      <Person_Add addNewPerson = {addNewPerson}/>
    </header>
    <body>
        <Person_List people = {people}/>      
    </body>
  </div>


  );
}

export default App;
