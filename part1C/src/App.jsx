import { useState } from "react"

const App = () => {
  const [value, setValue] = useState(10)

  const handleCick = () => {
    console.log("click en el boton")
    setValue(0)
  }
  const hello = (who) => () => {
    console.log("hello world", who)
  }
  const setToValue = (newValue) => () => {
    console.log("el nuevo valor es", newValue)
    setValue(newValue)
  }

return (
  <div>
    {value}
    <button onClick={hello()}>reset to zero</button>
    <button onClick={setToValue(value+1)}>world</button>
    <button onClick={setToValue(10)}>react</button>
    <button onClick={setToValue(20)}>function</button>
  </div>
)
}
export default App