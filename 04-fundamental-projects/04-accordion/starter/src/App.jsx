import data from './data'
import React, { useState } from 'react'
import Questions from './Questions'

const App = () => {
  const [activeId, setActiveId] = useState(null)
  const [questions, setQuestions] = useState(data)
  const toggleQuestion = (id) => {
    const newActiveId = id === activeId ? null : id
    setActiveId(newActiveId)
  }
  return (
    <main>
      <Questions
        questions={questions}
        activeId={activeId}
        toggleQuestion={toggleQuestion}
      />
    </main>
  )
}
export default App
