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
const Result = props =>{ 
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
    const [votesArrayCopy, updateVote] = useState(0)

    const getRandom = () => {
        console.log("set random")
        setRandom(Math.floor(Math.random() * anecdotes.length))
    }

    const voteAnecdote = () => {
      votesArray[selected] += 1  
      const votesArrayCopy = [...votesArray]
      console.log(votesArrayCopy)
      console.log(selected, "voted!")
      updateVote(votesArrayCopy)
  }

    return (
      <div>
        <Result value={anecdotes[selected]} votes={votesArrayCopy[selected]}/>
        <Button handleClick={() => voteAnecdote()} text="vote" />
        <Button handleClick={() => getRandom()} text="next anecdote" />
      </div>
    )
  }
  

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)