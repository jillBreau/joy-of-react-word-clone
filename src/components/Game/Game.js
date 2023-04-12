import React, { useState, useEffect } from 'react'

import { sample } from '../../utils'
import { WORDS } from '../../data'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import Guesses from '../Guesses/Guesses'
import GuessInput from '../GuessInput/GuessInput'
import CompleteBanner from '../CompleteBanner/CompleteBanner'

function Game() {
  const [guesses, setGuesses] = useState([])
  const [won, setWon] = useState(false)
  const [over, setOver] = useState(false)
  const [answer, setAnswer] = React.useState(() => {
    return sample(WORDS)
  })

  useEffect(() => {
    if (guesses[guesses.length - 1] === answer) {
      setWon(true)
    } else if (guesses.length === NUM_OF_GUESSES_ALLOWED) {
      setOver(true)
    }
  }, [guesses, answer])

  const onRestart = () => {
    setGuesses([])
    setWon(false)
    setOver(false)
    setAnswer(sample(WORDS))
  }

  return (
    <>
      <Guesses
        guesses={guesses}
        answer={answer}
        setWon={setWon}
        setOver={setOver}
      />
      <GuessInput
        guesses={guesses}
        setGuesses={setGuesses}
        won={won}
        over={over}
      />
      {(won || over) && (
        <CompleteBanner
          won={won}
          over={over}
          numGuesses={guesses.length}
          answer={answer}
          onRestart={onRestart}
        />
      )}
    </>
  )
}

export default Game
