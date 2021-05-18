import React, { useState, useEffect } from 'react'
import Filter from './components/filter'
import Addpeople from './components/addPeople'
import RenderPeople from './components/renderPeople'
import peopleService from './services/people'
import './index.css'
import Notification from './components/notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [filtered, setFiltered] = useState(persons)
  const [errorMessage, seterrorMessage] = useState(null)

  useEffect(() => {
    peopleService.getAll().then((initialObjects) => {
      setPersons(initialObjects)
      setFiltered(initialObjects)
    })
  }, [])

  const filterNames = (event) => {
    setFiltered(persons)
    setNewFilter(event.target.value)

    const showFiltered = persons.filter((names) =>
      names.name.toLowerCase().includes(newFilter.toLowerCase())
    )
    setFiltered(showFiltered)
  }

  const handlingName = (event) => {
    setNewName(event.target.value)
  }

  const handlingNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const addNewName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber,
    }

    const nameExists = filtered.some((names) => names.name === newName)

    if (nameExists) {
      const newNumber = persons.filter(
        (value) => value.name === nameObject.name
      )

      const changedNumber = { ...nameObject, id: newNumber[0].id }
      window.confirm(
        `${nameObject.name} is already added to  phonebook,replace the old number with a new one?`
      )
        ? peopleService
            .update(changedNumber.id, changedNumber)
            .then((response) => {
              setPersons(
                persons.map((person) =>
                  person.name !== nameObject.name ? person : response
                )
              )
              setFiltered(
                persons.map((person) =>
                  person.name !== nameObject.name ? person : response
                )
              )

              seterrorMessage({
                text: `Updated as ${nameObject.name} number`,
                type: 'succesful',
              })
              setTimeout(() => {
                seterrorMessage(null)
              }, 5000)
            })
            .catch((error) => {
              seterrorMessage({
                text: `Information of ${nameObject.name} has already been removed from server`,
                type: 'error',
              })
              setTimeout(() => {
                seterrorMessage(null)
              }, 5000)
            })
        : console.log('nothing has changed')
    } else {
      peopleService.addData(nameObject).then((returnedData) => {
        setFiltered(filtered.concat(returnedData))
        setPersons(persons.concat(returnedData))
        setNewName('')
        setNewNumber('')
        seterrorMessage({
          text: `Added' ${nameObject.name}'`,
          type: 'succesful',
        })
        setTimeout(() => {
          seterrorMessage(null)
        }, 5000)
      })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage} />
      <Filter newFilter={newFilter} filterNames={filterNames} />

      <h3>add a new</h3>

      <Addpeople
        newName={newName}
        newNumber={newNumber}
        handlingName={handlingName}
        handlingNumber={handlingNumber}
        addNewName={addNewName}
      />

      <h2>Numbers</h2>

      <RenderPeople
        filtered={filtered}
        setFiltered={setFiltered}
        setPersons={setPersons}
      />
    </div>
  )
}

export default App
