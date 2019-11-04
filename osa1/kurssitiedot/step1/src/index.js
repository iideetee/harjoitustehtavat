import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return (
      <div>
        <p>{props.course}</p>
      </div>
    )
  }

const Content = (props) => {
    return (
      <div>
        <p>{props.part} {props.exerice}</p>
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
    <Content part={part1}  exerice={exercises1}/>
    <Content part={part2}  exerice={exercises2}/>
    <Content part={part3}  exerice={exercises3}/>
    <Total exerice1={exercises1} exerice2={exercises2} exerice3={exercises3}/> 
  </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))