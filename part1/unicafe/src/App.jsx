import { useState } from 'react'

const Button = ({onClick, text}) => (
    <button onClick={onClick}>{text}</button>
  )

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

const Statistics = (props) => {
  return (
    <div>
      <h1>statistics</h1>
      <div>good {props.good}</div>
      <div>neutral {props.neutral}</div>
      <div>bad {props.bad}</div>
      <div>total {props.total}</div>
      <div>average <Average score={props.score} total={props.total} /></div>
      <div>positive <Positive good={props.good} total={props.total} /> %</div>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [score, setScore] = useState(0)

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

      <Statistics good={good} neutral={neutral} bad={bad} total={total} score={score} />
    </div>
  )
}

export default App