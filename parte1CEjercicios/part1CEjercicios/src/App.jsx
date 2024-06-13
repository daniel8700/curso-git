import { useState } from 'react'
const App = () => {
  const [state, setState] = useState({
    bueno:0, malo:0, neutral:0})
    const total = state.bueno + state.malo + state.neutral;
    return(
    <div>
      <Negritas text = {"Comentarios"}></Negritas>
      <Button valor={() => setState({...state, bueno: state.bueno + 1})} text="Bueno"></Button>
      <Button valor={() => setState({...state, neutral: state.neutral + 1})} text="Neutral"></Button>
      <Button valor={() => setState({...state, malo: state.malo + 1})} text="Malo"></Button>
      <Negritas text = {"Estadisticas"}></Negritas>
      {total > 0 &&(
        <>
      <Estadisticas name = {"bueno"}text = {state.bueno}></Estadisticas>
      <Estadisticas name = {"neutral"}text = {state.neutral}></Estadisticas>
      <Estadisticas name = {"malo"} text = {state.malo}></Estadisticas>
      <Estadisticas name = {"todos"} text = {total}></Estadisticas>
      <Estadisticas name = {"promedio"} text = {total !==0 ?(state.bueno - state.malo) / total : 0 }></Estadisticas>
      <Estadisticas name = {"positivo"} text = {total !==0 ?(state.bueno * 100) / total : 0}></Estadisticas>
      </>)}
      {total == 0 && (<>
      <Estadisticas name = {"No se han recibido comentarios"} text = {0}></Estadisticas>
    </>)}
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
  <tr>
  <td><p>{props.name}</p></td><td><p>{props.text}</p></td>
  </tr>
)
export default App
