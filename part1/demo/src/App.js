import { useState } from 'react'

//REACT components
const Display = ({value}) => <div>{value}</div>

const Button = ({handleClick, text}) => (
      <button onClick = {handleClick}> 
        {text}
      </button>
  )

  const History = (props) => {
    if (props.allClicks.length === 0) {
      return (
        <div>the app is used by pressing the buttons</div>
      )
    }
    return (
      <div>button press history: {props.allClicks.join(' ')}</div>
    )
  }

//App
const App = () => {
 
//States
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [value, setValue] = useState(10)

//Event handlers
const handleLeftClick = () => {
  setAll(allClicks.concat('L'))
  setLeft(left + 1)
}

const handleRightClick = () => {
  setAll(allClicks.concat('R'))
  setRight(right + 1)
}

const setToValue = (newValue) => () => { //Function that returns a function
  console.log('Setting value to', newValue)
  setValue(newValue)
}

//JSX render, including the parameter values 
  return (
    <div>
      <Display value={value}/>
      <Button handleClick={setToValue(1000)} text="thousand"/>
      <button onClick={setToValue(100)}>Hundred</button>
      <button onClick={setToValue(value+1)}>Increment</button>
    </div>
)
}

export default App
