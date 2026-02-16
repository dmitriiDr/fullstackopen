const SumExercises = ({ parts }) => {
    // console.log('what is happening', s, p)
    const total = parts.reduce((sum, part) => sum + part.exercises, 0)
    return (
        <p>total of {total} exercises</p>
    )
}

export default SumExercises