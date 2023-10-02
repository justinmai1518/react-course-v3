import data from './data'
import React, { useState } from 'react'
import Title from './Title'
import Menu from './Menu'
import Categories from './Categories'
const allCategories = ['all', ...new Set(data.map((item) => item.category))]
const App = () => {
  const [menu, setMenu] = useState(data)
  const [categories, setCategories] = useState(allCategories)

  const filterItems = (category) => {
    if (category === 'all') {
      setMenu(data)
      return
    }
    const newItems = data.filter((item) => item.category === category)
    setMenu(newItems)
  }
  // console.log(tempItems)
  // console.log(menu)
  return (
    <section className="section-center">
      <Title />
      <Categories categories={categories} filterItems={filterItems} />
      <Menu menu={menu} />
    </section>
  )
}
export default App
