import { useState } from 'react'
import AddPerson from './components/AddPerson'
import FilterName from './components/FilterName'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456'},
    { name: 'Ada Lovelace', number: '39-44-5323523'},
    { name: 'Dan Abramov', number: '12-43-234345'},
    { name: 'Mary Poppendieck', number: '39-23-6423122'}
  ])

  const [filter, setFilter] = useState('')

  const personsToShow = filter.trim() === ''
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <FilterName filter={filter} setFilter={setFilter} />
      </div>
      <div>
        <AddPerson persons={persons} setPersons={setPersons} />
      </div>
      <h2>Numbers</h2>
      <div>
        <Persons persons={personsToShow} />
      </div>
    </div>
  )
}

export default App