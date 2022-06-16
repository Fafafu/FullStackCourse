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
/* No longer used. Replaced by component Statistics
const DisplayStats = ({text, number}) => {
  return(
    <p>{text} {number}</p>
  )
}
*/
const Statistics = ({stats}) => {
  console.log('Statistics', stats)
  if (isNaN(stats.average.num)) { //Average is 'NaN' if no feedback has been gathered. 
    return <p>No feedback given</p>
  }
  else
    return(
      <>
      <p>{stats.good.text} {stats.good.num}</p>
      <p>{stats.neutral.text} {stats.neutral.num}</p>
      <p>{stats.bad.text} {stats.bad.num}</p>
      <p>{stats.average.text} {stats.average.num}</p>
      <p>{stats.positive.text} {stats.positive.num}</p>
      </>
    )
}


const App = () => {

  //States
  const [goodRatings, setGood] = useState(0) 
  const [badRatings, setBad] = useState(0) 
  const [neutralRatings, setNeutral] = useState(0)

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
    

  //Variables
  const stats = {
    good: {
      text:'good',
      num: goodRatings
    },
    neutral: {
      text:'neutral',
      num: neutralRatings
    },
    bad: {
      text:'bad',
      num: badRatings
    },
    average: {
      text:'average',
      num: average(goodRatings, neutralRatings, badRatings)
    },
    positive: {
      text:'positive',
      num: percentageGood(goodRatings, neutralRatings, badRatings)
    }
  }




  //JSX
    return (
  <div>
      <Header text={'give feedback'}/>
      <Button handleClick={() => setGood(increase(goodRatings))} text='good'/>
      <Button handleClick={() => setNeutral(increase(neutralRatings))} text='neutral'/>
      <Button handleClick={() => setBad(increase(badRatings))} text='bad'/>
      <Header text={'statistics'}/>
      <Statistics stats={stats}/>
  </div>
  )
}

  export default App
