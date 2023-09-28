import { useEffect, useState } from 'react'

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <>
      <h2>cleanup function</h2>
      <button className="btn" onClick={() => setToggle(!toggle)}>
        Toggle component
      </button>
      {toggle && <RandomeComponent />}
    </>
  )
}

const RandomeComponent = () => {
  useEffect(() => {
    // console.log('this is interesting')
    const intID = setInterval(() => {
      console.log('hello from interval')
    }, 1000)
    return () => clearInterval(intID)
  }, [])
  return <h1>Hello there</h1>
}

export default CleanupFunction
