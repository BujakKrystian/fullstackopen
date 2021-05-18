import React, { useState, useEffect } from 'react'
import axios from 'axios'

const WeatherInfo = ({ country }) => {
  const [weather, setWeather] = useState([])
  const [toggle, setToggle] = useState(0)

  const params = {
    appid: '60e386ec73922dda1610d1050172e7bf',
    q: country,
    units: 'Celsius',
  }

  useEffect(() => {
    axios
      .get('http://api.openweathermap.org/data/2.5/weather', { params })
      .then((response) => {
        const apiResponse = response.data
        setWeather(apiResponse)
        setToggle(1)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (toggle === 1) {
    return (
      <div>
        {console.log(weather)}
        <b>temperature:</b>
        {weather.main.temp} <br></br>
        <b>Wind:</b> {weather.wind.speed.unit} {weather.wind.direction.code}
      </div>
    )
  }

  return <div></div>
}

export default WeatherInfo
