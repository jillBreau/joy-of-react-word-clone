import React from 'react'
import { GUESS_LENGTH, NUM_OF_GUESSES_ALLOWED } from '../../constants'
import { range } from '../../utils'
import { checkGuess } from '../../game-helpers'

function Guesses({ guesses, answer }) {
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((_, i) => (
        <p className="guess" key={i}>
          {range(0, GUESS_LENGTH).map((_, j) => (
            <span
              className={`cell ${
                guesses.length > i
                  ? checkGuess(guesses[i], answer)[j].status
                  : ''
              }`}
              key={j}
            >
              {guesses.length > i ? guesses[i][j] : ''}
            </span>
          ))}
        </p>
      ))}
    </div>
  )
}

export default Guesses
