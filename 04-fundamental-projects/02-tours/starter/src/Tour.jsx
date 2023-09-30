import React, { useState } from 'react'

const Tour = (props) => {
  const { id, image, name, info, price, removeTour } = props
  const [readMore, setReadMore] = useState(false)
  return (
    <article className="single-tour">
      <img className="img" src={image} alt={name} />
      <span className="tour-price">{price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {readMore ? info : `${info.substring(0, 200)}... `}
          <button className="info-btn" onClick={() => setReadMore(!readMore)}>
            {readMore ? ' show less' : ' show more'}
          </button>
        </p>
      </div>
      <button
        className="delete-btn btn-block btn"
        onClick={() => removeTour(id)}
      >
        Not Interested
      </button>
    </article>
  )
}

export default Tour
