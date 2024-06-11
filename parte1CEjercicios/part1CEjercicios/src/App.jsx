import { useState } from 'react'
const App = () => {
  const [state, setState] = useState({
    bueno:0, malo:0, neutral:0})
    console.log(state.bueno)
  
  return(
    <div>
      <Negritas text = {"Comentarios"}></Negritas>
      <Button valor={() => setState({...state, bueno: state.bueno + 1})} text="Bueno"></Button>
      <Button valor={() => setState({...state, neutral: state.neutral + 1})} text="Neutral"></Button>
      <Button valor={() => setState({...state, malo: state.malo + 1})} text="Malo"></Button>
      <Negritas text = {"Estadisticas"}></Negritas>
      <Estadisticas name = {"bueno"}text = {state.bueno}></Estadisticas>
      <Estadisticas name = {"neutral"}text = {state.neutral}></Estadisticas>
      <Estadisticas name = {"malo"} text = {state.malo}></Estadisticas>
    </div>
  )
}
const Button = (props) => (
  <button onClick={props.valor}>{props.text}</button>
)
const Negritas = (props) => (
  <h1><strong >{props.text}</strong></h1>
)
const Estadisticas = (props) => (
  <p>{props.name} {props.text}</p>
)
export default App
