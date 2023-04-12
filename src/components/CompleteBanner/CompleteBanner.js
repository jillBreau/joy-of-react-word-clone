import React from 'react'

function CompleteBanner({ won, over, numGuesses, answer, onRestart }) {
  return (
    <>
      <div className={`${won ? 'happy' : over ? 'sad' : ''} banner`}>
        {won && (
          <p>
            <strong>Congratulations!</strong> Got it in{' '}
            <strong>{numGuesses}</strong>.
          </p>
        )}
        {over && (
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        )}
        <button onClick={onRestart}>Restart game</button>
      </div>
    </>
  )
}

export default CompleteBanner
