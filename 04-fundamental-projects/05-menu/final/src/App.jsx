import React, { useState } from 'react'
import Menu from './Menu'
import Categories from './Categories'
import Title from './Title'
import items from './data'
const allCategories = ['all', ...new Set(items.map((item) => item.category))]

function App() {
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState(allCategories)

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items)
      return
    }
    const newItems = items.filter((item) => item.category === category)
    setMenuItems(newItems)
  }

  return (
    <section className="section-center">
      <Title />

      <Categories categories={categories} filterItems={filterItems} />
      <Menu items={menuItems} />
    </section>
  )
}

export default App
