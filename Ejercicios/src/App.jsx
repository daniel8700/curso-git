import { useState } from 'react'


  const handleNext = (initialAnecdotes, setSelected) => {
    const random = Math.floor(Math.random() * initialAnecdotes.length)
    setSelected(random)
    console.log(random)
  }

  const handleVote = (votes, selected, setVotes) => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
  }

  const Negritas = (props) => (
    <p><b><strong>{props.text}</strong></b></p>
  )

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>{text}</button>
)

const MasVotos = (votes) =>{
  let indiceMayor = 0;
  let numeroMayor = votes[0];
  votes.forEach((numero, indice)=>{
    if(numero > numeroMayor){
      numeroMayor = numero;
      indiceMayor = indice;
    }
  });
  console.log("indice mayor",indiceMayor)
  return indiceMayor;
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  const anecdotas = [MasVotos(votes)];
  
  return (
    <div>
      <h1><Negritas text={"Anecdota del día"}></Negritas></h1>
      {anecdotes[selected]}      
      <p>votos acumulados {votes[selected]}</p>
      <Button onClick={() => handleVote(votes, selected, setVotes)} text= {"Votar"}></Button>
      <Button onClick={() => handleNext(anecdotes, setSelected)} text={"Siguiente comentario"}></Button>      
      <h2><Negritas text={"Anecdota con mas votos"}></Negritas></h2>
      <p>{anecdotes[anecdotas]}</p>
      <p>{votes[anecdotas]} votos</p>
    </div>
  )
}

export default App
