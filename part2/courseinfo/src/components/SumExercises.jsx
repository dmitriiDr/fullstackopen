const SumExercises = ({ parts }) => {
    const total = parts.reduce((sum, part) => sum + part.exercises, 0)
    return (
        <p>total of {total} exercises</p>
    )
}

export default SumExercises