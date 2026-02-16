import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  
  const addPerson = (event) => {
    event.preventDefault()
    if (newName.trim() === '') return // prevents adding empty names ''
      const personObject = {
        name: newName,
        id: persons.length + 1,
      }
      setPersons(persons.concat(personObject))
      setNewName('')
    }

  const [newName, setNewName] = useState('')
  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handlePersonChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        <div>
          {persons.map((person) => (
            <li key={person.name}>{person.name}</li>
          ))}
        </div>
    </div>
  )
}

export default App