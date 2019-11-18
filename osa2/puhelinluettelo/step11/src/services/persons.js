import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAllPersons = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const createPerson = newObject => {
 // console.log(newObject)
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const deletePerson = person => {
   const request = axios.delete(baseUrl+"/"+person.id)
   return request.then(response => response.data)
 }

 const updatePersonNumber = newObject => {
  const request = axios.put(baseUrl+"/"+newObject.id, newObject)
  return request.then(response => response.data)
}

export default { 
  getAllPersons: getAllPersons, 
  createPerson: createPerson, 
  deletePerson: deletePerson, 
  updatePersonNumber: updatePersonNumber,
}
