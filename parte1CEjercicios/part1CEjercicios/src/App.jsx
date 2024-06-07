import { useState } from 'react'
const App = () => {
  const [state, setState] = useState({
    bueno:0, malo:0, neutral:0})
    console.log(state.bueno)
  
  return(
    <div>
      <h1><strong>Comentarios</strong></h1>
      <Button valor={() => setState({...state, bueno: state.bueno + 1})} text="Bueno"></Button>
      <Button valor={() => setState({...state, neutral: state.neutral + 1})} text="Neutral"></Button>
      <Button valor={() => setState({...state, malo: state.malo + 1})} text="Malo"></Button>
      <p>{state.bueno} {state.neutral} {state.malo}</p>
    </div>
  )
}
const Button = (props) => (
  <button onClick={props.valor}>{props.text}</button>
)
export default App
