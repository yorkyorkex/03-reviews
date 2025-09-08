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
  const nextPerson = () => {
    setIndex((currentIndex) => {
      let newIndex = currentIndex + 1
      if (newIndex > people.length - 1) {
        newIndex = 0
      }
      return newIndex
    })
  }
  const prevPerson = () => {
    setIndex((currentIndex) => {
      let newIndex = currentIndex - 1
      if (newIndex < 0) {
        newIndex = people.length - 1
      }
      return newIndex
    })
  }
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
          onClick={
            nextPerson /* () => setIndex(index ? index - 1 : people.length - 1) */
          }
        >
          <FaChevronCircleLeft />
        </button>
        <button
          className="next-btn"
          onClick={
            prevPerson /* () => setIndex(index < people.length - 1 ? index + 1 : 0) */
          }
        >
          <FaChevronCircleRight />
        </button>
      </article>
    </main>
  )
}
export default App
