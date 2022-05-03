
const Header = (props) => {
    return (
        <div>
            <h1>{props.course}-kurssi</h1>
        </div>
    )
}

const Content = ({ part1, part2, part3 }) => {
    console.log('part1', part1);
    console.log('part2', part2);
    console.log('part3', part3);

    return (
        <div>
            <Part part={part1} />
            <Part part={part2} />
            <Part part={part3} />
        </div>
    )
}

const Part = ({ part }) => {
    console.log('part', part);
    const { name, exercises } = part;
    return (
        <div>
            <p>Osiossa "{name}" on tehtäviä {exercises}.</p>
        </div>
    )
}


const Total = ({ part1, part2, part3 }) => {
    console.log('ex1', part1);
    console.log('ex2', part2);
    console.log('ex3', part3);

    const vastaus = part1 + part2 + part3

    return (
        <div>
            <p>Kaikkiaan tehtäviä on {vastaus}.</p>
        </div>
    )
}


const App = () => {
    const course = 'Half Stack application development, indeed'
    const part1 = {
        name: 'Fundamentals of React',
        exercises: 10
    }
    const part2 = {
        name: 'Using props to pass data',
        exercises: 7
    }
    const part3 = {
        name: 'State of a component',
        exercises: 14
    }
    return (
        <div>
            <Header course={course} />
            <Content
                part1={part1}
                part2={part2}
                part3={part3}
            />
            <Total
                part1={part1.exercises}
                part2={part2.exercises}
                part3={part3.exercises} />
        </div>
    )
}

export default App
