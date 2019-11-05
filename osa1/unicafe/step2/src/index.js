import ReactDOM from 'react-dom'
import React, { useState } from 'react'

const Header = props => <div><b>{props.value}</b><br /><br /></div>
const Footer = props => <div><b>{props.value}</b><br /><br /></div>
const Result = props => <div>Good {props.good}<br />Neutral {props.neutral}<br />Bad {props.bad}<br />All {props.all}<br />Average {props.avg}<br />Positive {props.positive} %</div>

const Button = (props) => (
    <button onClick={props.handleClick}>
    {props.text}
    </button>
)

const App = () => {

    // tallenna napit omaan tilaansa
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const header = "give feedback"
    const footer = "statistics"

    const getAll = () => {
       return good + neutral + bad
    }

    const getAvg = () => {
        return (good - bad)/getAll()
    }

    const getPositive = () => {

        return good/(good + neutral + bad)
     }

    const setToGood = newValue => {
        setGood(newValue)
    }

    const setToNeutral = newValue => {
        setNeutral(newValue)
    }

    const setToBad = newValue => {
        setBad(newValue)
    }

    return (
        <div>
        <Header value={header} />
        <Button handleClick={() => setToGood(good+1)} text="Good" />
        <Button handleClick={() => setToNeutral(neutral+1)} text="Netral" />
        <Button handleClick={() => setToBad(bad+1)} text="Bad" />
        <br /><br />
        <Footer value={footer} />
        <Result good={good} neutral={neutral} bad={bad} all={getAll()} avg={getAvg()} positive={getPositive()}/> 
        </div>
    )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)