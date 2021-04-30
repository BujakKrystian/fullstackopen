import React from 'react'

const Header = (props) => {
  return <h1>{props.course.name}</h1>
}

const Part = (props) => {
  return (
    <p>
      {props.partName.name} {props.partName.exercises}
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part partName={props.course.parts[0]} />
      <Part partName={props.course.parts[1]} />
      <Part partName={props.course.parts[2]} />
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>
        {props.course.parts[0].exercises +
          props.course.parts[1].exercises +
          props.course.parts[2].exercises}
      </p>
    </div>
  )
}

const App = () => {
  //const course = 'Half Stack application development'
  // const part1 = 'Fundamentals of React'
  //const exercises1 = 10
  //const part2 = 'Using props to pass data'
  //const exercises2 = 7
  //const part3 = 'State of a component'
  //const exercises3 = 14

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      },
    ],
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App
