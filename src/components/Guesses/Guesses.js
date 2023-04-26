import React from 'react'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import { range } from '../../utils'
import Guess from '../Guess/Guess'

function Guesses({ guesses, answer }) {
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((_, i) => (
        <Guess guess={guesses[i]} answer={answer} key={i}></Guess>
      ))}
    </div>
  )
}

export default Guesses
