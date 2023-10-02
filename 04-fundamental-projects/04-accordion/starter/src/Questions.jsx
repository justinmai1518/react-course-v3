import SingleQuestion from './SingleQuestion'
import React from 'react'

const Questions = ({ questions, activeId, toggleQuestion }) => {
  //   console.log(questions, activeId, toggleQuestion)
  console.log(activeId)
  return (
    <section className="container">
      <h1>Questions</h1>
      {questions.map((question) => {
        return (
          <SingleQuestion
            key={question.id}
            {...question}
            activeId={activeId}
            toggleQuestion={toggleQuestion}
          />
        )
      })}
    </section>
  )
}

export default Questions
