import { useState } from 'react'

//REACT components
const Display = ({counter}) => <div>{counter}</div>

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

//Event handlers
const handleLeftClick = () => {
  setAll(allClicks.concat('L'))
  setLeft(left + 1)
}

const handleRightClick = () => {
  setAll(allClicks.concat('R'))
  setRight(right + 1)
}

//JSX render
  return (
    <div>
      {left}
      <Button handleClick={handleLeftClick} text='left'></Button>
      <Button handleClick={handleRightClick} text='Right'></Button>
      {right}
      <History allClicks={allClicks}/>
    </div>
)
}

export default App
