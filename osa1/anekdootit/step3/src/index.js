import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const votesArray = Array(anecdotes.length).fill(0)
const Text1 = props => <div><h1>{props.text}</h1></div>
const Text2 = props => <div><h1>{props.text}</h1></div>
const Result = props => <div><b>{props.value}</b><br />has {props.votes} votes<br /><br /></div>
const MostVoted = props =>{ 
                            if(props.votes != null)
                              return (<div><b>{props.value}</b><br />has {props.votes} votes<br /><br /></div>)
                            else
                              return (<div><b>{props.value}</b><br />no votes found<br /><br /></div>)
                          }

const Button = (props) => (
    <button onClick={props.handleClick}>
    {props.text}
    </button>
)

const App = () => {
    const [selected, setRandom] = useState(0)
    const [dataArr, setMostVoted] = useState(0)
    const topic = "Anecdote of the day"
    const votesText = "Anecdote with most votes"

    const getRandom = () => {
        console.log("getRandom")
        setRandom(Math.floor(Math.random() * anecdotes.length))
    }

    const getMostVoted = () => {
      console.log("getMostVoted")
      const votesArrayCopy = [...votesArray]
      const max = Math.max(...votesArrayCopy)
      if(max > 0)
      {
        const index = votesArrayCopy.indexOf(max)
        const dataArr = [index,max]
        console.log(dataArr[0], dataArr[1])
        setMostVoted(dataArr)
      }
    }

    const voteAnecdote = () => {
      console.log("voteAnecdote")
      votesArray[selected] += 1  
      console.log(votesArray)
      console.log(selected, "voted!")
      getMostVoted()
    }

    return (
      <div>
        <Text1 text={topic}/>
        <Result value={anecdotes[selected]} votes={votesArray[selected]}/>
        <Button handleClick={() => voteAnecdote()} text="vote" />
        <Button handleClick={() => getRandom()} text="next anecdote" />
        <Text2 text={votesText}/>
        <MostVoted value={anecdotes[dataArr[0]]} votes={dataArr[1]}/>
      </div>
    )
  }
  

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)