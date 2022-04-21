import { useState } from 'react'

const Staticline = ({text, value}) => {
  if(text === "positive"){
    return(
      <tr>
        <td>{text}</td>
        <td> {value} %</td>
      </tr>
    )
  }

  return(
    <tr>
      <td>{text}</td>
      <td> {value}</td>
    </tr>  
  )
}

const Statics = ({good, bad, neutral}) =>{

  if(good === 0 && bad ===0 && neutral === 0) {
    return (
      <div>
        <h1>statics</h1>
        <p>no feedback given</p>
      </div>
    )
  }
  
  return(
    <div>
      <h1>statics</h1> 
      <table>
      <tbody>
      <Staticline text = "good" value = {good} />
      <Staticline text = "neutral" value = {neutral} />
      <Staticline text = "bad" value = {bad} />
      <Staticline text = "all" value = {good + bad + neutral} />
      <Staticline text = "avarage" value = {(good + bad + neutral)/3} />
      <Staticline text = "positive" value = {(good/(good + bad + neutral)) * 100} />
      </tbody>
      </table>
    </div>
  )

}

const Button = ({text, click}) => {
  return(
    <button onClick={click}>{text}</button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button text = "good" click = {()=> setGood(good + 1)}/>
      <Button text = "neutral" click = {()=> setNeutral(neutral + 1)}/>
      <Button text = "bad" click = {()=> setBad(bad + 1)}/>
      <Statics good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}

export default App