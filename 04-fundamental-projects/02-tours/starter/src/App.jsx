import { useState, useEffect } from 'react'
import './index.css'
import Loading from './Loading'
import Tours from './Tours'
const url = 'https://course-api.com/react-tours-project'

const App = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const removeHandleClick = (id) => {
    const removedTour = data.filter((tour) => tour.id !== id)
    setData(removedTour)
  }
  const fetchData = async () => {
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error('Network response was not okay')
      }
      const result = await response.json()
      setData(result)
      setIsLoading(false)
    } catch (error) {
      console.log('Error fetching data', error)
      setIsLoading(false)
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

  if (data.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tour left</h2>
          <button className="btn" onClick={() => fetchData()}>
            refresh
          </button>
        </div>
      </main>
    )
  }

  return (
    <main>
      <Tours tours={data} removeTour={removeHandleClick} />
    </main>
  )
}
export default App
