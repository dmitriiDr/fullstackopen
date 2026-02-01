import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const Button = ({onClick, text}) => (
    <button onClick={onClick}>{text}</button>
  )

  const [total, setTotal] = useState(0)
  const [score, setScore] = useState(0)

  const Average = ({score, total}) => {
    if (total === 0)
      return 0
    else
      return score / total
  }

  const Positive = ({good, total}) => {
    if (total === 0)
      return 0
    else
      return (good / total) * 100
  }
  



  return (
    <div>
      <h1>give feedback</h1>

      <Button onClick={() => {
        setGood(good + 1)
        setTotal(total + 1)
        setScore(score + 1)
      }} text="good" />
      <Button onClick={() => {
        setNeutral(neutral + 1)
        setTotal(total + 1)
        setScore(score + 0)
      }} text="neutral" />
      <Button onClick={() => {
        setBad(bad + 1)
        setTotal(total + 1)
        setScore(score - 1)
      }} text="bad" />

      <h1>statistics</h1>
      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
      <div>total {total}</div> 
      <div>average <Average score={score} total={total} /></div>
      <div>positive <Positive good = {good} total={total} /> %</div>
    </div>
  )
}

export default App