const Header = ({name}) => {
  return (
    <>
      <h1>{name}</h1>
    </>
  )
}

const Content = ({parts}) => {
  return (
    <>
      <p>{parts[0].part} {parts[0].exercises}</p>
      <p>{parts[1].part} {parts[1].exercises}</p>
      <p>{parts[2].part} {parts[2].exercises}</p>
    </>
  )
}


const Total = ({parts}) => {
  return (
    <>
      <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
    </>
  )
}

const App = () => {
  const parts = [
    {part: 'Fundamentals of React', exercises: 10},
    {part: 'Using props to pass data', exercises: 7},
    {part: 'State of a component', exercises: 14}
  ]

  return (
    <div>
      <Header name="Half Stack application development" />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App