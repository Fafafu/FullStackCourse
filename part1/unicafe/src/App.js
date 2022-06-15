import { useState } from 'react'
 



//React components
const Header = (props) => {
  console.log("Header props",props)
  return(
    <h2>{props.text}</h2>
  )
}

const Button = ({handleClick, text}) => {
  console.log("Button props", handleClick, text)
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const DisplayStats = ({text, number}) => {
  return(
    <p>{text} {number}</p>
  )
}



const App = () => {

//States
const [goodRatings, setGood] = useState(0) 
const [badRatings, setBad] = useState(0) 
const [neutralRatings, setNeutral] = useState(0)
const [allRatings, setAll] = useState([]) 

//Functions
const increase = (value) => 
  value+1

const average = (good,neutral,bad) => {
  return(
    (good - bad)/(good+neutral+bad)
  )
}

const percentageGood = (good,neutral,bad) => {
  return(
    (good / (good+neutral+bad)) + "%"
  )
}
  

//JSX
  return (
<div>
    <Header text={'give feedback'}/>
    <Button handleClick={() => setGood(increase(goodRatings))} text='good'/>
    <Button handleClick={() => setNeutral(increase(neutralRatings))} text='neutral'/>
    <Button handleClick={() => setBad(increase(badRatings))} text='bad'/>

    <Header text={'statistics'}/>
    <DisplayStats text='good' number={goodRatings}/>
    <DisplayStats text='neutral' number={neutralRatings}/>
    <DisplayStats text='bad' number={badRatings}/>
    <DisplayStats text='average' number={average(goodRatings,neutralRatings,badRatings)}/>
    <DisplayStats text='positive' number={percentageGood(goodRatings,neutralRatings,badRatings)}/>
</div>
)
}

export default App
