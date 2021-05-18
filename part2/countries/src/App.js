import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Countries from './components/Countries'
import CountriesInfo from './components/CountriesInfo'
import WeatherInfo from './components/WeatherInfo'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filtered, setFiltered] = useState([])
  const [newFilter, setNewFilter] = useState('')
  const [toggle, setToggle] = useState(0)

  useEffect(() => {
    console.log('effect')

    axios.get('https://restcountries.eu/rest/v2/all').then((response) => {
      setCountries(response.data)
      setFiltered(response.data)
      setToggle(1)
    })
  }, [])

  const handleChange = (event) => {
    setNewFilter(event.target.value)
    console.log(filtered.length)
    setFiltered(
      countries.filter((value) =>
        value.name.toLowerCase().includes(newFilter.toLowerCase())
      )
    )
  }

  if (filtered.length === 1) {
    return (
      <div>
        <label>find countries</label>
        <input type='text' onChange={handleChange} />
        <CountriesInfo country={filtered[0]} />
        <WeatherInfo country={filtered[0].name} />
      </div>
    )
  }

  if (filtered.length > 1 && filtered.length <= 10) {
    return (
      <div>
        <label>find countries2 </label>
        <input type='text' onChange={handleChange} />
        {filtered.map((value, i) => {
          return (
            <div key={i}>
              <Countries country={value} />
              <WeatherInfo country={value} />
            </div>
          )
        })}
      </div>
    )
  }
  return (
    <div>
      <label>find countries </label>
      <input type='text' onChange={handleChange} />
      <p>Too many matches, specify another filter</p>
    </div>
  )
}

export default App
