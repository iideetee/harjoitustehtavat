import ReactDOM from 'react-dom'
import React, { useState } from 'react'

const Header = props => <div><b>{props.value}</b><br /><br /></div>
const Footer = props => <div><b>{props.value}</b><br /><br /></div>
const Result = props => <div>Good {props.good}<br />Neutral {props.neutral}<br />Bad {props.bad}</div>

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

    const setToGood = newValue => {
        setGood(newValue)
    }

    return (
        <div>
        <Header value={header} />
        <Button handleClick={() => setToGood(good+1)} text="Good" />
        <Button handleClick={() => setNeutral(neutral+1)} text="Netral" />
        <Button handleClick={() => setBad(bad+1)} text="Bad" />
        <br /><br />
        <Footer value={footer} />
        <Result good={good} neutral={neutral} bad={bad}/> 
        </div>
    )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)