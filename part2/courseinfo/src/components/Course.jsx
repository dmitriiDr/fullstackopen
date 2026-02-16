import Header from "./Header"
import Content from "./Content"
import SumExercises from "./SumExercises"

const Course = ({ course }) => {
    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <h3>
                <SumExercises parts={course.parts} />
            </h3>
        </div>
    )
}

export default Course