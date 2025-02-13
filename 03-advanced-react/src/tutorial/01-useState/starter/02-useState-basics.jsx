import { useState } from 'react'

const UseStateBasics = () => {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    console.log(count)
    setCount(count + 1)
  }
  return (
    <div>
      <h4>You clicked {count} times</h4>
      <button type="btn" onClick={handleClick}>
        Click me
      </button>
    </div>
  )
}

export default UseStateBasics
