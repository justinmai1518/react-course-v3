import React from 'react'
import { useState } from 'react'

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Petter',
    age: 29,
    hobby: 'soccer',
  })

  const displayPerson = () => {
    setPerson({ name: 'John', age: 40, hobby: 'reading book' })
  }
  return (
    <>
      <h2>useState object example</h2>
      <h3>{person.name}</h3>
      <button onClick={displayPerson}>Display Person</button>
    </>
  )
}

export default UseStateObject
