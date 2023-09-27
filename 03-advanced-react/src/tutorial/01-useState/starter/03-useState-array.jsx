import React from 'react'
import { useState } from 'react'
import { data } from '../../../data'

const UseStateArray = () => {
  const [people, setPeople] = useState(data)

  const removeItem = (id) => {
    let newPeople = people.filter((person) => {
      return person.id !== id
    })
    console.log(newPeople)
    setPeople(newPeople)
  }

  return (
    <>
      <h2>useState array example</h2>
      {people.map((person) => {
        const { id, name } = person
        console.log(person)
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>Remove</button>
          </div>
        )
      })}
    </>
  )
}

export default UseStateArray
