import { useState } from 'react'

const Random = ({length,setSelected}) => {
  const rand = () => {
    return (Math.floor(Math.random() * length))
  }

  return(
    <button onClick={() => setSelected(rand)}>Random</button>
  )
}

const Vote = ({setVote,selected,votes,setFav}) =>{

  return(
      <button onClick={() => {
        //Set new vote
        const newArr = [...votes]
        newArr[selected] += 1
        setVote(newArr)
        //Set favorite  
        const max = Math.max(...newArr)
        setFav(newArr.indexOf(max))
      }}>Vote</button>
  )
}


const App = () => {

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   

  const [selected, setSelected] = useState(0)
  const [favorite, setFav] = useState(0)
  const [votes,setVote] = useState(Array(anecdotes.length).fill(0))


  return (
    <div>
      <h2>Anectode of the day</h2>   
      <div>
        {anecdotes[selected]}
      </div>
      <div>
        <Random length={anecdotes.length} setSelected ={setSelected} />
        <Vote setFav={setFav} setVote={setVote} selected={selected}votes={votes}/>
      </div>
      <h2>Anectode with most votes</h2>   
      <div>
        {anecdotes[favorite]}
      </div>
    </div>
  )
}

export default App