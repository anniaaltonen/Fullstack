
const Header = (props) => {
    return (
        <div>
            <h1>{props.course}-kurssi</h1>
        </div>
    )
}

const Content = ({ parts }) => {
    console.log('parts', parts);

    return (
        <div>
            <Part part={parts} />
            <Part part={parts} />
            <Part part={parts} />
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


const Total = ({ parts, title }) => {

    console.log(parts);

    const exercises1 = parts[0].exercises + parts[1].exercises + parts[2].exercises;
    let ex2 = 0;

    parts.forEach(({ exercises }) => {
        console.log('uusi', exercises);
        ex2 += exercises;
    })

    return (
        <div>
            <p>Kaikkiaan tehtäviä on {exercises1} {ex2}</p>
        </div>
    )
}

const App = () => {
    const course = 'Half Stack application development, indeed yes'
    const parts = [
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
        },
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
    console.log('parts', parts);


    return (
        <div>
            <Header course={course} />
            <Content parts={parts} />
            <Total parts={parts} title='Kissat' />
        </div>
    )
}

export default App
//{parts[0, 1, 2][1]}