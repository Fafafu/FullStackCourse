import { useState } from 'react'

const App = () => {
 
const [clicks, setClicks] = useState({
  left:0, right:0
})

const handleLeftClick = () => {
  const newClicks = {
    left: clicks.left+1,
    right: clicks.right
  }
  setClicks(newClicks)
}

const handleRightClick = () => {
  const newClicks = {
    left: clicks.left,
    right: clicks.right + 1
  }
  setClicks(newClicks)
}


  return (
    <div>
      {clicks.left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {clicks.right}
    </div>
)
}

const Display = ({counter}) => <div>{counter}</div>
const Button = ({onClick, text}) => (
    <div>
      <button onClick = {onClick}> 
        {text}
      </button>
    </div>
  )

  

export default App
