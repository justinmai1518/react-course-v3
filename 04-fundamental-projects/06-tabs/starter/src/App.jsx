import React, { useState, useEffect } from 'react'
import Loading from './Loading'

const url = 'https://course-api.com/react-tabs-project'

const App = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [info, setInfo] = useState([])
  const fetchData = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(url)
      const result = await response.json()
      setIsLoading(false)
      setInfo(result)
      console.log(result)
    } catch (error) {
      setIsLoading(true)
      console.log(error)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }
  return <h2>Tabs Starter</h2>
}
export default App
