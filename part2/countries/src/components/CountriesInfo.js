const CountriesInfo = ({ country }) => {
  return (
    <div>
      <h1>{country.name}</h1>
      <p>
        capital: {country.capital} <br></br>population: {country.population}
      </p>
      <h2>languages</h2>
      <ul>
        {country.languages.map(function (value, i) {
          return <li key={i}>{value.name}</li>
        })}
      </ul>
      <img src={country.flag} width='150px' alt='flag' />
    </div>
  )
}

export default CountriesInfo
