import React, { useState, useEffect } from 'react'
import personService from './services/persons'

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
    personService
      .getAllPersons()
      .then(response => {
        console.log("getAllPersons ", response)
        console.log('promise fulfilled')
        setPersons(response)
      })
  }, [])
// console.log('render', persons.length, 'persons')

const deletePerson = person => {
  if (window.confirm(`Do you really want to remove ${person.name} ?`)) 
  { 
  personService
      .deletePerson(person)
      .then(resp => {
        personService
        .getAllPersons()
        .then(response => {
          setPersons(response)
        })
      })
    }
}

  const [newName, setNewName ] = useState('') 
  const [newNumber, setNewNumber ] = useState('') 
  const [nameFilter, filterNames ] = useState('') 

  const Person = ({ person, deletePerson}) => {
 //   console.log(person)
    let name = person.name.toLowerCase(person);
    let result = name.indexOf(nameFilter);
    if(result > -1)
    {
      return (
        <div>{person.name} {person.number} <button onClick={deletePerson}>Delete</button></div>
      )
    }
    else{ return ( <div></div>) }
  }

  const rows = () => persons.map(person =>{
  //  console.log("rows", person)
    return(
    <Person
      key={person.name}
      person={person}
      deletePerson={() => deletePerson(person)}
    />)
  }
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
    
      personService
      .createPerson(personObject)
      .then(response => {
        setPersons(persons.concat(response))
        setNewName ('')
        setNewNumber ('')
      })

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