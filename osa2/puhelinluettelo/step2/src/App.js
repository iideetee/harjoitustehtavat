import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([{
    name: 'Harri Kullas',
  }])
  const [newName, setNewName ] = useState('') 

  const Person = ({ person }) => {
    console.log(person)
    return (
      <div>{person.name}</div>
    )
  }

  const rows = () => persons.map(person =>
    <Person
      key={person.name}
      person={person}
    />
  )

  const addPerson = (event) => {
    event.preventDefault()
    let added = false

    persons.forEach(function(item, index) {
      if(item.name === newName)
      {
        alert(`${newName} is already added to phonebook`)
        added = true
      }
    });

    if(added === false)
    {
      const personObject = {
        name: newName,
      }
    
      setPersons(persons.concat(personObject))
      setNewName ('')
      console.log(persons)
    }
  }

  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewName (event.target.value)
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <form onSubmit={addPerson}>
      name:<input
          value={newName}
          onChange={handlePersonChange}
        /><br />
        <button type="submit">add</button>
      </form>    
      <h1>Numbers</h1> 
      {rows()}
    </div>
  )
}

export default App