import React from 'react'
import Course from './components/Course'

const Topic = ({ topic }) => {
  return (
    <div><h1>{topic}</h1></div>
  )
}

const App = () => {
  const topic = "Web development curriculum"
  const course = [
    {
      name: 'Half Stack application development',
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  const rows = () => course.map(course => <Course course={course} />)
 
  return (
      <div>
        <Topic topic={topic}/>
        {rows()}
      </div>
    )
}

export default App 