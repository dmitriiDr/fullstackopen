import Header from "./Header"
import Content from "./Content"

const Course = ({ course }) => {
    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            {/* <p>Total number of exercises {course.parts.reduce((sum, part) => sum + part.exercises, 0)}</p> */}
        </div>
    )
}

export default Course