import { useState } from 'react'

const Header = ({ title }) => {
    return (
        <div>
            <h1>{title}</h1>
        </div>
    )
}

const Content = ({ good, neutral, bad }) => {

    return (
        <div>
        </div>
    )
}

const Total = ({ good, neutral, bad }) => {
    const hyva = good;
    const neutraali = neutral;
    const paha = bad;

    return (
        <div>
            <h2>tilastot</h2>
            <p>good {hyva}</p>
            <p>neutral {neutraali}</p>
            <p>bad {paha}</p>
        </div>
    )
}

const App = () => {
    // tallenna napit omaan tilaansa
    const title = 'give feedback';
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
            <Header title={title} />
            <Content good={[good, setGood]} neutral={[neutral, setNeutral]} bad={[bad, setBad]} />
            <button onClick={() => setGood(good + 1)}>
                good
            </button>
            <button onClick={() => setNeutral(neutral + 1)}>
                neutral
            </button>
            <button onClick={() => setBad(bad + 1)}>
                bad
            </button>
            <Total good={[good, setGood]} neutral={[neutral, setNeutral]} bad={[bad, setBad]} />
        </div>
    )
}

export default App