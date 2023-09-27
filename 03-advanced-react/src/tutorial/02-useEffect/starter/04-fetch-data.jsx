import { useState, useEffect } from 'react'

const url = 'https://api.github.com/users'

const FetchData = () => {
  const { users, setUsers } = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url)
        const users = await response.json()
        console.log(users)
        setUsers(users)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])
  return (
    <div>
      <h2>fetch data example</h2>
      <ul>
        {users.map((users) => {
          const { id, login, avatar_url, url } = users
          console.log(users)
          return (
            <li key={id}>
              <h3>
                <a href={url}>{login}</a>
              </h3>
              <img src={avatar_url} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}
export default FetchData
