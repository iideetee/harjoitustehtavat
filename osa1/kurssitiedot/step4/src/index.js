import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return (
      <div>
        <p>{props.course}</p>
      </div>
    )
  }

const Part = (props) => {
    console.log(props.part1.name)
    return (
      <div>
         <p>{props.part1.name} {props.part1.exercises}</p>
         <p>{props.part2.name} {props.part2.exercises}</p>
         <p>{props.part3.name} {props.part3.exercises}</p>
      </div>
    )
  }

const Content = (props) => {
    return (
      <div>
        <Part part1={props.part1} part2={props.part2} part3={props.part3} />
      </div>
    )
  }

const Total = (props) => {
    return (
      <div>
        <p>Number of exercises {props.part1.exercises + props.part2.exercises + props.part3.exercises}</p>
      </div>
    )
  }

  const App = () => {
    const course = 'Half Stack application development'
    const parts = [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  
    return (
      <div>
        jahuu
      </div>
    )
  }

ReactDOM.render(<App />, document.getElementById('root'))