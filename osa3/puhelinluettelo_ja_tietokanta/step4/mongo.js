const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false)

if ( process.argv.length<3 ) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]
const name = process.argv[3]
const number = process.argv[4]

const url =
    `mongodb+srv://iideetee:${password}@cluster0-dy4u3.mongodb.net/persons-app?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })



const personSchema = new mongoose.Schema({
  content: String,
  name: String,
  number: String
})

const Person = mongoose.model('Person', personSchema)

const person = new Person({
  content: 'content',
  name: name,
  number: number,
//  id: 18
})

if(person.number === undefined && person.name === undefined)
{
    console.log("phonebook:")
    Person.find({}).then(result => {
        result.forEach(person => {
            console.log(`${person.name} ${person.number}`);
        })
        mongoose.connection.close()
      })
}
else
{
    person.save().then(response => {
    console.log(`added ${response.name} number ${response.number} to phonebook`);
    mongoose.connection.close();
    })
}