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

  return (
    <div>
      {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>rigth</button>
      {right}
      <p>{allClicks.join(',')}</p>
      <p>total {total}</p>
    </div>
  )
}
export default App