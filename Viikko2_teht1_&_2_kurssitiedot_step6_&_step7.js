const Header = ({ course }) => {
    const nimi = course.name;

    return (
        < div >
            <h1>{nimi}</h1>
        </div >
    )
}


const Part = ({ part }) => {
    const osa = part;
    console.log('part', part)
    const nimi = osa.name;
    console.log('nimi', nimi)
    const teht = osa.exercises;

    return (
        <div>
            <p>
                {nimi} {teht}
            </p>
        </div>
    )
}



const Content = ({ course }) => {
    const osa = course.parts;
    console.log('osa', osa);
    const total = 0;


    return (
        <div>
            {osa.map((osa, i) =>
                <ul key={i}>
                    <Part part={osa} />
                </ul>
            )}
        </div>
    )
}

const Total = ({ course }) => {
    let yht = 0
    const kurssi = course
    const pituus = kurssi.parts
    console.log('kurssi', kurssi)
    console.log('pituus', pituus)

    function total({ pituus }) {
        if (!Array.isArray(pituus)) return;
        let yht = 0;
        for (let i = 0; i < pituus.length; i++) {
            yht += pituus[i].exercises
        }
        return yht;
    }

    yht = total({ pituus });
    console.log('yht', yht)
    return (
        <div>
            <p>total of {yht} excercises</p>
        </div>
    )
}

const Course = ({ course }) => {
    const kurssi = course;

    return (
        <div>
            <Header course={kurssi} />
            <Content course={kurssi} />
            <Total course={kurssi} />
        </div>
    )

}

const App = () => {
    const course = {
        name: 'Half Stack application development',
        id: 1,
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10,
                id: 1
            },
            {
                name: 'Using props to pass data',
                exercises: 7,
                id: 2
            },
            {
                name: 'State of a component',
                exercises: 14,
                id: 3
            }
        ]
    }

    return (
        <div>
            <Course course={course} />
        </div>
    )
}

export default App