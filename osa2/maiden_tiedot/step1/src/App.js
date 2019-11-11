import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {

  useEffect(() => {
    console.log('effect')
    console.log(chars)
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        getCountries(response.data)
      })
  }, [])

  const [countries, getCountries] = useState([])
  const [chars, filterCharacters ] = useState('') 
  let results = 0

  const handleCountryChange = (event) => {
    console.log(event.target.value)
    filterCharacters(event.target.value)
  }


  console.log(countries)

  const Country = ({ country }) => {
    console.log(country)
    let name = country.toLowerCase(country);
    let result = name.indexOf(chars);
    console.log(result)

    if(result > -1 && results < 10)
    {
      console.log(results)
      if(results === 1)
      {
        return (
          <div>{country}</div>
        )
      }
        console.log("-------------")

      results++
      return (
        <div>{country}</div>
      )
    }
    else{ return ( <div></div>) }
  }

  const rows = () => countries.map(country =>
    <Country
      key={country.name}
      country={country.name}
      capital={country.capital}
    />
  )

  return (
    <div>
      find countries<input value={chars} onChange={handleCountryChange} />
      <br />
      {rows()}
    </div>
  )
}

export default App

