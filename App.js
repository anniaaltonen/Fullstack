import { useState } from 'react'

const Header = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}

const StatisticLine = ({ text, value }) => {
  const nimi = text
  const arvo = value

  return (
    <div>
      <p>{nimi} {arvo}</p>
    </div>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  const hyva = good;
  const neutraali = neutral;
  const paha = bad;
  console.log('bad', bad)
  const all = (hyva[0] + neutraali[0] + paha[0]);
  console.log('all', all)
  const arvosanaHyva = hyva[0];
  const arvosanaNeutraali = 0;
  const arvoSanaPaha = (paha[0] * -1)
  const average = ((arvosanaHyva + arvoSanaPaha + arvosanaNeutraali) / all);
  const positive = (hyva[0] / all);

  if (all >= 1) {

    return (
      <div>
        <h2>tilastot</h2>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutraali} />
        <StatisticLine text="bad" value={paha} />
        <StatisticLine text="all" value={all} />
        <StatisticLine text="average" value={average} />
        <StatisticLine text="positive" value={positive} />
      </div>
    )
  } else {

    return (
      <div>
        <h2>tilastot</h2>
        <p>nothing to display, ok</p>
      </div>
    )
  }
}

const Button = (props) => {

  return (
    <div>
      <button onClick={props.handleClick}>{props.name}</button>
    </div>
  )
}

const App = () => {
  const title = 'give feedback';
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header title={title} />
      <Button handleClick={() => setGood(good + 1)} name="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} name="neutral" />
      <Button handleClick={() => setBad(bad + 1)} name="bad" />
      <Statistics good={[good, setGood]} neutral={[neutral, setNeutral]} bad={[bad, setBad]} />
    </div>
  )
}

export default App