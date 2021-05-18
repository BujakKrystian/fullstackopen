import CountriesInfo from './CountriesInfo'
import React, { useState } from 'react'

const Countries = ({ country }) => {
  const [visibility, setVisibility] = useState(false)

  if (visibility === true) {
    return (
      <div>
        {country.name}{' '}
        <button type='submit' onClick={() => setVisibility(!visibility)}>
          {' '}
          Show
        </button>
        <CountriesInfo country={country} />
      </div>
    )
  }

  if (visibility === false) {
    return (
      <div>
        {country.name}{' '}
        <button type='submit' onClick={() => setVisibility(!visibility)}>
          {' '}
          Show
        </button>
      </div>
    )
  }
}
export default Countries
