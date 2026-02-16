import { useState } from 'react'
import Person from './Person'

const AddPerson = ({ persons, setPersons }) => {

    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const addPerson = (event) => {
    event.preventDefault()

    const name = newName.trim()
    const number = newNumber.trim()

    if (name === '') return

    if (persons.some(person => person.name === name)) {
      alert(`${name} is already added to phonebook`)
      return
    }

    const personObject = { name, number }
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  return (
    <Person
      onSubmit={addPerson}
      newName={newName}
      newNumber={newNumber}
      onNameChange={(e) => setNewName(e.target.value)}
      onNumberChange={(e) => setNewNumber(e.target.value)}
    />
  )
}

export default AddPerson