import { useState } from "react"

const App = () => {
  const [counter, setCounter] = useState(0)
  const increaseaByOne = () => setCounter(counter+1)
  const decreaseaByOne = () => setCounter(counter-1)
  const setZero = () => setCounter(0)

  return (
    <div>
      <Display counter = {counter}></Display>
      <Button onSmash = {increaseaByOne} text = "plus"></Button>
      <Button onSmash = {setZero} text = 'zero'></Button>
      <Button onSmash = {decreaseaByOne} text = "minus"></Button>
    </div>


  )
}

const Display = ({counter}) => <div>{counter}</div>
  


const Button = ({onSmash, text}) => {
  return (
    <button onClick={onSmash}
>{text}</button>  )
}
export default App