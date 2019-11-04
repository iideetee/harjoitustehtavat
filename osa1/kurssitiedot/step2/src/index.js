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
    return (
      <div>
        <p>{props.part} {props.exerice}</p>
      </div>
    )
  }

const Content = (props) => {
    return (
      <div>
        <Part part={props.part1}  exerice={props.exercises1}/>
        <Part part={props.part2}  exerice={props.exercises2}/>
        <Part part={props.part3}  exerice={props.exercises3}/>
      </div>
    )
  }

const Total = (props) => {
    return (
      <div>
        <p>Number of exercises {props.exerice1 + props.exerice2 + props.exerice3}</p>
      </div>
    )
  }

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
    <Header course={course} />
    <Content part1={part1}  exercises1={exercises1}/>
    <Content part2={part2}  exercises2={exercises2}/>
    <Content part3={part3}  exercises3={exercises3}/>
    <Total exerice1={exercises1} exerice2={exercises2} exerice3={exercises3}/> 
  </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))