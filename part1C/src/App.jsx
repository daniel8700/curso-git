import { useState } from "react"
const Button = (props) => (
  <button onClick={props.handleCick}>{props.text}</button>
)
const Display = (props) => (
  <div>{props.value}</div>
)
const handleCick = () => {
  console.log("click en el boton")
  setValue(0)
}
const hello = (who) => () => {
  console.log("hello world", who)
  setValue(0)
}


const App = () => {
  const [value, setValue] = useState(10)

  const setToValue = (newValue) => {
    console.log("el nuevo valor es", newValue)
    setValue(newValue)
  }


  return (
    <div>
      <Display value={value}></Display>
      <Button handleCick={() => setToValue(0)} text="clear"></Button>
      <Button handleCick={() => setToValue(1000)} text="mil"></Button>
      <Button handleCick={() => setToValue(value + 1)} text="+ 1"></Button>
    </div>
  )
}
export default App