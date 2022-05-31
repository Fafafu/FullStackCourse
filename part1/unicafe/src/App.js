
//This defines a react component.
const Hello = (props) => {
  return (
    <>
      <p>Hello {props.name}, you are {props.age}</p>
    </>
  )
}




const App = () => { // App includes the REACT component Hello in this case

  const name ="Martin"
  const age = "30"

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="George" age="64"/> 
      <Hello name={name} age={age}/> 
    </div>
  )
}



export default App