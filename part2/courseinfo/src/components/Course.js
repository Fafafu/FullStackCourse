import React from 'react'

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

export default Course