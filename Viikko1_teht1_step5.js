
const Header = ({ course }) => {
    return (
        <div>
            <h1>{course.name}-kurssi</h1>
        </div>
    )
}

const Content = ({ parts }) => {
    const osat = parts.parts;
    const part0 = osat[0];
    const part1 = osat[1];
    const part2 = osat[2];

    return (
        <div>
            <Part part={part0} />
            <Part part={part1} />
            <Part part={part2} />
        </div>
    )
}

const Part = ({ part }) => {
    const osat = part.parts;
    const { name, exercises } = part;

    return (
        <div>
            <p>Osiossa "{name}" on tehtäviä {exercises}.</p>
        </div>
    )
}


const Total = ({ parts }) => {

    const osat = parts.parts;
    const exercises1 = osat[0].exercises + osat[1].exercises + osat[2].exercises;

    return (
        <div>
            <p>Kaikkiaan tehtäviä on {exercises1}</p>
        </div>
    )
}

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    }
    console.log('course', course);


    return (
        <div>
            <Header course={course} />
            <Content parts={course} />
            <Total parts={course} />
        </div>
    )
}

export default App