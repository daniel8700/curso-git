import { useState } from "react"

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setright] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)
  
  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    const updateR = right+1
    setright(updateR)
    setTotal(left+updateR)
  }

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    const updateL = left+1
    setLeft(updateL)
    setTotal(updateL+right)
  }

  const clearClick = () => {
    setTotal(0)
    setLeft(0)
    setright(0)
    setAll([])
  }

  const History = (props) => {
    console.log(props)
    if(props.allClicks.length === 0){
      return(
        <div>
          La aplicacion se utiliza presionando los botones
        </div>
      )
    }
    return(
    <div>
      Historial de botones presionados: {props.allClicks.join(" ")}
    </div>
    )
  }

  const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)
  return (
    <div>
      {left}
      <Button handleClick={handleLeftClick} text='left' />
      <button onClick={clearClick}>clear</button>      
      <Button handleClick={handleRightClick} text='right' />
      {right}
      <History allClicks={allClicks}></History>
      <p>total {total}</p>
    </div>
  )
}
export default App