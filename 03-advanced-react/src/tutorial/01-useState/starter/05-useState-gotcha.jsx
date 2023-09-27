import { useState } from 'react'
const UseStateGotcha = () => {
  const [value, setValue] = useState(0)
  const handleIncrement = () => {
    setValue((currentState) => {
      const newState = currentState + 1
      return newState
    })
  }

  const handleClick = () => {
    setTimeout(() => {
      console.log('click the button')
      setValue((currentState) => {
        return currentState + 1
      })
    }, 3000)
  }
  return (
    <>
      <h2>useState "gotcha"</h2>
      <h3>The value: {value} </h3>
      <button onClick={handleClick}>Increment</button>
    </>
  )
}

export default UseStateGotcha
