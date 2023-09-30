import { useState } from 'react'
import data from './data'
import List from './List'

const App = () => {
  const [users, setUsers] = useState(data)
  return (
    <main>
      <section className="container">
        <h3>{users.length} birthdays today</h3>
        <List users={users} />
        <button
          type="button"
          className="btn btn-block"
          onClick={() => setUsers([])}
        >
          Clear all
        </button>
      </section>
    </main>
  )
}
export default App
