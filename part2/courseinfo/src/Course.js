const Course = ({ course }, { key }) => {
  return (
    <div id={key}>
      <Header course={course} />
      <Content course={course} key={key} />
      <Total course={course} />
    </div>
  )
}

const Header = ({ course }) => {
  return <h1>{course.name}</h1>
}

const Total = ({ course }) => {
  return (
    <b>
      total of {course.parts.reduce((sum, item) => sum + item.exercises, 0)}{' '}
      exercises
    </b>
  )
}

const Part = ({ exercises, name }) => {
  return (
    <p>
      {name} {exercises}
    </p>
  )
}

const Content = ({ course, key }) => {
  return (
    <div key={key}>
      {course.parts.map((item) => (
        <div key={item.id}>
          <Part exercises={item.exercises} name={item.name} />
        </div>
      ))}
    </div>
  )
}

export default Course
