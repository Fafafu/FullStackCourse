

const Header = (props) => {
  console.log('Header', props)
  return (
    <>
      <h1>{props.header}</h1>
    </>
  )
}

const Part = (props) => {
  console.log('Part', props);
  return (
    <>
      <li>{props.part} {props.exercises}</li>
    </>
  )
}

const Total = (props) => {
  console.log('Total', props)
  return (
    <>
      <p>Number of exercises {props.sum}</p>
    </>
  )
}

const Course = (props) => {
  console.log('Course', props)
  const parts = props.course.parts //Array of parts.

  return (<div>
    <Header header={props.course.name} />
    <ul>
      {parts.map(part =>
        <Part key={part.id} part={part.name} exercises={part.exercises} />
      )}
    </ul>
    <Total
      sum={parts.reduce((sum, part) => sum + part.exercises, 0
      )}
    />
  </div>)
}

/*
      <Header courses={courses}/>
      <Part part={part1} exercise={exercises1}/>
      <Part part={part2} exercise={exercises2}/>
      <Part part={part3} exercise={exercises3}/>
      <Total exercise1={exercises1} exercise2={exercises2} exercise3={exercises3}/>
      */

const App = () => {

  //Variables
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
      id: 2,
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

  //Functions



  return (
    <div>
      {courses.map(course => 
        <Course key={course.id} course={course} />
      )}
    </div>
  )
}


export default App;
