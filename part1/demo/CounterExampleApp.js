import { useState } from 'react'

const App = () => {
 
const [counter, setCounter] = useState(0)

const increaseByOne = () => setCounter(counter + 1)
const decreaseByOne = () => setCounter(counter - 1)
const zero = () => setCounter(0)

  return (
  <div>
    <Display counter={counter}/>
    <Button onClick={increaseByOne} text={'Plus'}/>
    <Button onClick={decreaseByOne} text={'Minus'}/>
    <Button onClick={zero} text={'Zero'}/>
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
