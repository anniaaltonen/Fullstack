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
                <p>good {hyva}</p>
                <p>neutral {neutraali}</p>
                <p>bad {paha}</p>
                <p>all {all}</p>
                <p>average {average}</p>
                <p>positive {positive}</p>

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

const App = () => {
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
            <Statistics good={[good, setGood]} neutral={[neutral, setNeutral]} bad={[bad, setBad]} />
        </div>
    )
}

export default App