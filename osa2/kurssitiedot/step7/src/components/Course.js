import React from 'react'

const Header = ({ course }) => {
    return (
      <div><h1>{course.name}</h1></div>
    )
}

const Content = ({ course }) => {
    const rows = () => course.parts.map(course => <div key={course.id}>{course.name} {course.exercises}<br /><br /></div>)
 //   console.log(course)
    return (
        <div>
          {rows()}
        </div>
      )
}

const Total = ({ course }) => {
  const copyCourseArray = [...course.parts];

  console.log(course.parts)
  const sum = copyCourseArray.reduce((total, amount) =>{
    return total + amount.exercises   
  },0); 

  return (
    <div><b>total of {sum} exerices</b></div>
  )
}

const Course = ({ course }) => {
  return (
    <div>
    <Header course={course} />
    <Content course={course} />
    <Total course={course} />
  </div>
  )
}

export default Course