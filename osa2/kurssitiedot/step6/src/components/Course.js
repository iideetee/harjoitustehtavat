import React from 'react'

const Header = ({ course }) => {
    return (
      <div><h1>{course.name}</h1></div>
    )
}

const Content = ({ course }) => {
    const rows = () => course.parts.map(course => <div key={course.id}>{course.name} {course.exercises}<br /><br /></div>)
    console.log(course)
    return (
        <div>
          {rows()}
        </div>
      )
}

const Course = ({ course }) => {
  return (
    <div>
    <Header course={course} />
    <Content course={course} />
  </div>
  )
}

export default Course