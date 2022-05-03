
const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.course}-kurssi</h1>
    </div>
  )
}

const Content = ({ part1, part2, part3, exercises1, exercises2, exercises3 }) => {
  return (
    <div>
      <Part part={part1} number={exercises1} />
      <Part part={part2} number={exercises2} />
      <Part part={part3} number={exercises3} />
    </div>
  )
}

const Part = (props) => {
  const { part, number } = props;
  return (
    <div>
      <p>Osiossa "{part}" on tehtäviä {number}.</p>
    </div>
  )
}

const Total = ({ part1, part2, part3 }) => {
  console.log('props', props);
  const { exercises } = props;
  const result = sum(exercises)
  return (
    <div>
      <p>Kaikkiaan tehtäviä on {result}.</p>
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

  //const part1 = 'Fundamentals of React'
  //const exercises1 = 10
  //const part2 = 'Using props to pass data'
  //const exercises2 = 7
  //const part3 = 'State of a component'
  //const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1}
        //exercises1={exercises1}
        part2={part2}
        //exercises2={exercises2}
        part3={part3}
      //exercises3={exercises3}
      />
      <Total
        part1={part1}
        part2={part2}
        part3={part3} />
    </div>
  )
}

export default App
