const Person = require('./models/person')
const express = require('express')
require('dotenv').config()
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')


app.use(bodyParser.json())
app.use(cors())
app.use(express.static('build'))
//app.use(morgan('tiny'))

morgan.token('body', function (req, res) { return JSON.stringify(req.body) });
app.use(morgan(':method :url :status :response-time ms - :res[content-length] :body - :req[content-length]'));

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

    Person.find({}).then(persons => {
      console.log(persons.length)
      response.send(`Phonebook has info for ${persons.length} people<br /><br /> ${datenow}`)
    });
  })

  app.get('/api/persons', (request, response) => {
   // response.json(persons)
   Person.find({}).then(persons => {
    response.json(persons.map(person => person.toJSON()))
  });
  })

  app.delete('/api/persons/:id', (request, response, next) => {
    Person.findByIdAndRemove(request.params.id)
    .then(result => {
      response.status(204).end()
    })
    .catch(error => next(error))
  })

  app.post('/api/persons', (request, response) => {
    const body = request.body
    console.log(body)
    if (!body.content) {
      return response.status(400).json({ 
        error: 'content missing' 
      })
    }
    if (!body.name || !body.number ) {
      return response.status(418).json({ 
        error: 'name or number missing' 
      })
    }

    for(let i=0;i<persons.length;i++)
    {
      console.log(persons[i].name)
      if(persons[i].name === body.name)
      {
        return response.status(418).json({ 
          error: 'name already found' 
        })
      }
    }
  
    var userRec = new Person({
      name: body.name,
      number: body.number,
      id: generateId(),
    });
    
    //persons = persons.concat(person)
  
    //response.json(person)
   // var userRec = new Person({"name":"Jessie Emerson","number":"24234234"});

    userRec.save().then(savedPerson => {
      response.json(savedPerson.toJSON())
    })
    .catch(error => next(error))
  })

  const generateId = () => {
    return Math.random() * 1000
  }

  app.get('/api/persons/:id', (request, response, next) => {

    Person.findById(request.params.id)
    .then(person => {
      if (person) {
        response.json(person.toJSON())
      } else {
        response.status(404).end()
      }
    })
    .catch(error => next(error))
  })
    
  const PORT = process.env.PORT || 3001
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })

  const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
  }
  
  app.use(unknownEndpoint)

  const errorHandler = (error, request, response, next) => {
    console.error(error.message)
  
    if (error.name === 'CastError' && error.kind == 'ObjectId') {
      return response.status(400).send({ error: 'malformatted id' })
    } 
  
    next(error)
  }
  
  app.use(errorHandler)