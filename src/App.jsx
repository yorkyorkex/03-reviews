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

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0
    }
    if (number < 0) {
      return people.length - 1
    }
    return number
  }

  const nextPerson = () => {
    setIndex((currentIndex) => {
      let newIndex = currentIndex + 1
      return checkNumber(newIndex)
    })
  }
  const prevPerson = () => {
    setIndex((currentIndex) => {
      let newIndex = currentIndex - 1
      return checkNumber(newIndex)
    })
  }

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length)
    if (randomNumber === index) {
      randomNumber = index + 1
    }
    setIndex(checkNumber(randomNumber))
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
        <div className="btn-container">
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
        </div>
        <button
          className="btn btn-hipster"
          onClick={
            randomPerson /* () => setIndex(Math.floor(Math.random() * people.length)) */
          }
        >
          surprise me
        </button>
      </article>
    </main>
  )
}
export default App
