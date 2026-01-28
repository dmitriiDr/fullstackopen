const Header = ({name}) => {
  return (
    <>
      <h1>{name}</h1>
    </>
  )
}

const Part = ({name, exercises}) => {
  return (
    <p>{name} {exercises}</p>
  )
  
}


const Content = ({parts}) => {
  return (
    <>
      <Part name={parts[0].part} exercises={parts[0].exercises} />
      <Part name={parts[1].part} exercises={parts[1].exercises} />
      <Part name={parts[2].part} exercises={parts[2].exercises} />
    </>
  )
}


const Total = ({parts}) => {
  const total = parts[0].exercises + parts[1].exercises + parts[2].exercises;
  return (
    <>
      <p>Number of exercises {total}</p>
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