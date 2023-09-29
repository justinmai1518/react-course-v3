import React from 'react'
import avatar from '../../../assets/default-avatar.svg'

const Person = ({ name, nickName, images }) => {
  const img = images?.[0].small?.url || avatar
  return (
    <div>
      <h4>{name}</h4>
      <h3>{nickName}</h3>
      <img src={img} alt={name} style={{ width: '50px' }} />
    </div>
  )
}

export default Person
