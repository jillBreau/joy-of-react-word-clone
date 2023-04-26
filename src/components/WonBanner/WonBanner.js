import React from 'react'
import Banner from '../Banner'

function WonBanner({ numGuesses, buttonFn, buttonText }) {
  return (
    <Banner status="happy" buttonFn={buttonFn} buttonText={buttonText}>
      <p>
        <strong>Congratulations!</strong> Got it in{' '}
        <strong>{numGuesses}</strong>.
      </p>
    </Banner>
  )
}

export default WonBanner
