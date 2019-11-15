import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Filter = (props) => {
  return (
    <div>{props.text}<input value={props.value} onChange={props.onChange}/></div>
  )
}

const Button = (props) => (
  <button type={props.type}>{props.label}</button>
)

const App = () => {

  const [persons, setPersons] = useState([])

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'persons')

  const [newName, setNewName ] = useState('') 
  const [newNumber, setNewNumber ] = useState('') 
  const [nameFilter, filterNames ] = useState('') 

  const Person = ({ person }) => {
    console.log(person)
    let name = person.name.toLowerCase(person);
    let result = name.indexOf(nameFilter);
    if(result > -1)
    {
      return (
        <div>{person.name} {person.number}</div>
      )
    }
    else{ return ( <div></div>) }
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
        number: newNumber
      }
    
      axios
      .post('http://localhost:3001/persons', personObject)
      .then(response => {
        console.log(response)
        setPersons(persons.concat(response.data))
        setNewName ('')
        setNewNumber ('')
      })

      console.log(persons)
    }
  }

  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewName (event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber (event.target.value)
  }

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    filterNames (event.target.value)
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter value={nameFilter} onChange={handleFilterChange} text="filter shown with:"/>
      <form onSubmit={addPerson}>
      <h1>add a new</h1>
      name:<input
          value={newName}
          onChange={handlePersonChange}
        /><br />
      number:<input
          value={newNumber}
          onChange={handleNumberChange}
        /><br />
        <Button type="submit" label="add"/>
      </form>    
      <h1>Numbers</h1> 
      {rows()}
    </div>
  )
}

export default App