import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'
import reviews from './data'
import { useState } from 'react'
const App = () => {
  const [index, setIndex] = useState(0)
  const { name, job, text, image } = reviews[index]
  const checkNumber = (number) => {
    if (number > reviews.length - 1) {
      return 0
    }
    if (number < 0) {
      return reviews.length - 1
    }
    return number
  }
  const prePerson = () =>
    setIndex((index) => {
      return checkNumber(index - 1)
    })
  const nextPerson = () =>
    setIndex((index) => {
      return checkNumber(index + 1)
    })
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * reviews.length)
    if (randomNumber === index) {
      randomNumber = index + 1
    }
    setIndex(checkNumber(randomNumber))
  }
  return (
    <main>
      <div className="review">
        <div className="img-container">
          <img src={image} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>

        <h5 className="title">{name}</h5>
        <span className="job">{job}</span>
        <div className="info">{text}</div>
        <div className="btn-container">
          <button className="prev-btn" onClick={prePerson}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className="btn btn-hipster" onClick={randomPerson}>
          surprise me
        </button>
      </div>
    </main>
  )
}
export default App
