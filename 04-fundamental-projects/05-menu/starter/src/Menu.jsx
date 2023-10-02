import React from 'react'
import MenuItem from './MenuItem'

const Menu = ({ menu }) => {
  return (
    <div className="section-center">
      {menu.map((menuItem) => {
        return <MenuItem key={menuItem.id} {...menuItem} />
      })}
    </div>
  )
}

export default Menu
