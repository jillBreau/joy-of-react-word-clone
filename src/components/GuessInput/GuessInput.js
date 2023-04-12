import React, { useState } from 'react'
import { GUESS_LENGTH } from '../../constants'

function GuessInput({ guesses, setGuesses, won, over }) {
  const [input, setInput] = useState('')

  const changeInput = (value) => {
    setInput(value.toUpperCase())
  }
  const submitInput = (e) => {
    e.preventDefault()
    const newGuesses = [...guesses]
    newGuesses.push(input)
    setGuesses(newGuesses)
    setInput('')
  }

  return (
    <form onSubmit={submitInput}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        minLength={GUESS_LENGTH}
        maxLength={GUESS_LENGTH}
        pattern={`[a-zA-Z]{${GUESS_LENGTH}}`}
        title={`${GUESS_LENGTH} letter guess`}
        id="guess-input"
        type="text"
        value={input}
        onChange={(e) => changeInput(e.target.value)}
        disabled={won || over}
      ></input>
    </form>
  )
}

export default GuessInput
