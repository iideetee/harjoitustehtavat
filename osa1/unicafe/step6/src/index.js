import ReactDOM from 'react-dom'
import React, { useState } from 'react'

const Header = props => <div><b>{props.value}</b><br /><br /></div>
const Footer = props => <div><b>{props.value}</b><br /><br /></div>
const Statistics = props => {
console.log(props.all)
if(props.all !== 0)
{
return(
    <div>
        <table>
            <tbody>
            <Statistic text="good" value ={props.good} />
            <Statistic text="neutral" value ={props.neutral} />
            <Statistic text="bad" value ={props.bad} />
            <Statistic text="all" value ={props.all} />
            <Statistic text="average" value ={props.avg} />
            <Statistic text="positive" value ={props.positive} />
            </tbody>
        </table>
    </div>
    )
}
else
    return(<div>No feedback given</div>)
}

const Statistic = props => <tr><td>{props.text}</td><td>{props.value}</td></tr>

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
        <Button handleClick={() => setToNeutral(neutral+1)} text="Neutral" />
        <Button handleClick={() => setToBad(bad+1)} text="Bad" />
        <br /><br />
        <Footer value={footer} />
        <Statistics good={good} neutral={neutral} bad={bad} all={getAll()} avg={getAvg()} positive={getPositive()}/> 
        </div>
    )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)