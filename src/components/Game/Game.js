import React, { useState } from 'react'
import { sample } from '../../utils'
import { WORDS } from '../../data'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import Guesses from '../Guesses/Guesses'
import GuessInput from '../GuessInput/GuessInput'
import WonBanner from '../WonBanner/WonBanner'
import LostBanner from '../LostBanner/LostBanner'

function Game() {
  const [guesses, setGuesses] = useState([])
  const [status, setStatus] = useState('running')
  const [answer, setAnswer] = React.useState(() => {
    return sample(WORDS)
  })
  const restartGame = 'Restart game'

  const handleGuess = (guess) => {
    const nextGuesses = [...guesses, guess]
    if (guess === answer) {
      setStatus('won')
    } else if (nextGuesses.length === NUM_OF_GUESSES_ALLOWED) {
      setStatus('lost')
    }
    setGuesses(nextGuesses)
  }

  const onRestart = () => {
    setGuesses([])
    setStatus('running')
    setAnswer(sample(WORDS))
  }

  return (
    <>
      <Guesses guesses={guesses} answer={answer} />
      <GuessInput handleGuess={handleGuess} disabled={status !== 'running'} />
      {status === 'won' && (
        <WonBanner
          numGuesses={guesses.length}
          buttonFn={onRestart}
          buttonText={restartGame}
        />
      )}
      {status === 'lost' && (
        <LostBanner
          answer={answer}
          buttonFn={onRestart}
          buttonText={restartGame}
        />
      )}
    </>
  )
}

export default Game
