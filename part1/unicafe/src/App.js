
const Header = (props) => {
  console.log(props)
  return(
  <>
    <h1>{props.course}</h1>
  </>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <>
    <p>{props.parts[0].name} {props.parts[0].exercises}</p>
    <p>{props.parts[1].name} {props.parts[1].exercises}</p>
    <p>{props.parts[2].name} {props.parts[2].exercises}</p>
    </>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <>
    <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises  + props.parts[2].exercises }</p>
    </>
  )
}

const App = () => { // App includes the REACT component Hello in this case

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
/*      <Content name={parts[0].name} exercises={parts[0].exercises}/>
      <Content name={parts[1].name} exercises={parts[1].exercises}/>
      <Content name={parts[2].name} exercises={parts[2].exercises}/> 
      <Total exercise1={parts[0].exercises} exercise2={parts[1].exercises} exercise3={parts[2].exercises}/>*/

  return (
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total parts={parts}/>
    </div>
  )
}



export default App