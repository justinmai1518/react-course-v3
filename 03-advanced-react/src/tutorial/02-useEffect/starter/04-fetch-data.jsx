import { useState, useEffect } from 'react'

const url = 'https://api.github.com/users'

const FetchData = () => {
  const [users, setUsers] = useState([])
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
    <section>
      <h2>fetch data example</h2>
      <ul>
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user
          console.log(user)
          return (
            <li key={id}>
              <img src={avatar_url} />
              <div>
                <h5>{login}</h5>
                <a href={html_url}>profile</a>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
export default FetchData
