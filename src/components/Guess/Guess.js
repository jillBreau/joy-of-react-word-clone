import React from 'react'
import { GUESS_LENGTH } from '../../constants'
import { range } from '../../utils'
import { checkGuess } from '../../game-helpers'

function Guess({ guess, answer }) {
  return (
    <p className="guess">
      {range(0, GUESS_LENGTH).map((_, j) => (
        <span
          className={`cell ${guess ? checkGuess(guess, answer)[j].status : ''}`}
          key={j}
        >
          {guess ? guess[j] : undefined}
        </span>
      ))}
    </p>
  )
}

export default Guess
