import { useState } from 'react'
 
//init



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

const StatisticsLine = ({text, number}) => {
  return(
    <tr>
      <td>{text} </td><td> {number}</td>
    </tr>
  )
}

const Statistics = ({stats}) => {
  console.log('Statistics', stats)
  if (isNaN(stats.average.num)) { //Average is 'NaN' if no feedback has been gathered. 
    return <p>No feedback given</p>
  }
  else
    return(
      <table>
        <tbody>
          <StatisticsLine text={stats.good.text} number={stats.good.num}/>
          <StatisticsLine text={stats.neutral.text} number={stats.neutral.num}/>
          <StatisticsLine text={stats.bad.text} number={stats.bad.num}/>
          <StatisticsLine text={stats.average.text} number={stats.average.num}/>
          <StatisticsLine text={stats.positive.text} number={stats.positive.num}/>
        </tbody>
      </table>
    )
}

const DisplayText = ({text}) => {
  return(
    <p>{text}</p>
  )
    
  
}


const App = () => {

  //States
  const [goodRatings, setGood] = useState(0) 
  const [badRatings, setBad] = useState(0) 
  const [neutralRatings, setNeutral] = useState(0)
  const [anecdoteIdx, setAnecdoteIdx] = useState(0)
  const [votes, setVotes] = useState([0,0,0,0,0,0,0]) // RISK! Fixed number


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
 
  const vote = (idx) => {
    const copy = [...votes]
    copy[idx] += 1
    setVotes(copy)
  }

//Support functions  
  const getRandomInt = (max) => {
    return (
      Math.floor(Math.random() * max)
    )
  }

  const getIdxOfMax = (arr) => {
    const max = Math.max(...arr)
    return(
      arr.indexOf(max)
    )
  }
/*
  const zip = (a1, a2) => { 
    return(
      a1.map((x, i) => [x, a2[i]])
    )
  }
*/


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

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]


  //JSX
    return (
  <div>
      <Header text={'Give feedback'}/>
      <Button handleClick={() => setGood(increase(goodRatings))} text='good'/>
      <Button handleClick={() => setNeutral(increase(neutralRatings))} text='neutral'/>
      <Button handleClick={() => setBad(increase(badRatings))} text='bad'/>
      <Header text={'Statistics'}/>
      <Statistics stats={stats}/>
      <Header text={'Anecdotes'}/>  
      <Button handleClick={() => setAnecdoteIdx(getRandomInt(anecdotes.length-1))} text='Next anecdote'/>
      <Button handleClick={() => vote(anecdoteIdx)} text='Vote'/>
      <DisplayText text={anecdotes[anecdoteIdx] +'.  ' +votes[anecdoteIdx] + ' votes.'}/>  
      <Header text={'Anecdote with most votes'}/>
      <DisplayText text={anecdotes[getIdxOfMax(votes)] +'.  ' +votes[getIdxOfMax(votes)] + ' votes.'}/>  

  </div>
  )
}

  export default App
