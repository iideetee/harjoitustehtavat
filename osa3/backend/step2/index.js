const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

let persons = [
    {
      "name": "Arto Hellas",
      "number": "040-123456",
      "id": 1
    },
    {
      "name": "Ada Lovelace",
      "number": "39-44-5323523",
      "id": 2
    },
    {
      "name": "Dan Abramov",
      "number": "12-43-234345",
      "id": 3
    },
    {
      "id": 5,
      "name": "seppo",
      "number": "6666666"
    }
  ]

  app.get('/info', (request, response) => {
    const datenow = new Date()
    let len = persons.length

    response.send(`Phonebook has info for ${len} people<br /><br /> ${datenow}`)
  })

  app.get('/api/persons', (request, response) => {
    response.json(persons)
  })
    
  const PORT = 3001
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })