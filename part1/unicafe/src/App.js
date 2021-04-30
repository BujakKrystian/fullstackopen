import React, { useState } from 'react'

const Statistics = ({ good, neutral, bad }) => {
  const totalStats = good + neutral + bad
  const averageStat = (good - bad) / (good + neutral + bad)
  const positiveStat = ((good / (good + neutral + bad)) * 100).toString() + ' %'

  if (good + neutral + bad === 0) {
    return <div>no feedback given</div>
  }
  return (
    <div>
      <table>
        <tbody>
          <Statistic text='good' value={good} />
          <Statistic text='neutral' value={neutral} />
          <Statistic text='bad' value={bad} />
          <Statistic text='all' value={totalStats} />
          <Statistic text='average' value={averageStat} />
          <Statistic text='positive' value={positiveStat} />
        </tbody>
      </table>
    </div>
  )
}

const Statistic = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }
  const handleBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>Give feedback</h1>

      <Button handleClick={handleGood} text='good' />
      <Button handleClick={handleNeutral} text='neutral' />
      <Button handleClick={handleBad} text='bad' />

      <h2>Statistics</h2>

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
