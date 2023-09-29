import { useState } from 'react'
import { data } from '../../../data'

const UserChallenge = () => {
  const [name, setName] = useState('')
  const [users, setUsers] = useState(data)

  const handleClick = (e) => {
    e.preventDefault()
    console.log(name)
    if (!name) return
    const fakeID = Date.now()
    const newUser = { id: fakeID, name }
    const updateUsers = [...users, newUser]
    setUsers(updateUsers)
    setName('')
  }
  const removeUser = (id) => {
    console.log(id)
    const removedUsers = users.filter((user) => user.id !== id)
    setUsers(removedUsers)
  }
  return (
    <div>
      <form className="form" onSubmit={handleClick}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h4>{user.name}</h4>
            <button type="btn" onClick={() => removeUser(user.id)}>
              Remove
            </button>
          </div>
        )
      })}
    </div>
  )
}
export default UserChallenge
