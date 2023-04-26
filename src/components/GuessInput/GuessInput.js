import React, { useState } from 'react'
import { GUESS_LENGTH } from '../../constants'

function GuessInput({ handleGuess, disabled }) {
  const [input, setInput] = useState('')

  const changeInput = (value) => {
    setInput(value.toUpperCase())
  }
  const submitInput = (e) => {
    e.preventDefault()
    handleGuess(input)
    setInput('')
  }

  return (
    <form class="guess-input-wrapper" onSubmit={submitInput}>
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
        disabled={disabled}
      ></input>
    </form>
  )
}

export default GuessInput
