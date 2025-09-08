import people from './data'
import React, { useState } from 'react'
import {
  FaChevronCircleLeft,
  FaChevronCircleRight,
  FaQuoteRight,
} from 'react-icons/fa'
const App = () => {
  const [index, setIndex] = useState(0)
  const { name, job, image, text } = people[index]
  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <button
          className="prev-btn"
          onClick={() => setIndex(index ? index - 1 : people.length - 1)}
        >
          <FaChevronCircleLeft />
        </button>
        <button
          className="next-btn"
          onClick={() => setIndex(index < people.length - 1 ? index + 1 : 0)}
        >
          <FaChevronCircleRight />
        </button>
      </article>
    </main>
  )
}
export default App
