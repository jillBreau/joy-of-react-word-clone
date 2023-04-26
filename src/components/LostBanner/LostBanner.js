import React from 'react'
import Banner from '../Banner'

function LostBanner({ answer, buttonFn, buttonText }) {
  return (
    <Banner status="sad" buttonFn={buttonFn} buttonText={buttonText}>
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </Banner>
  )
}

export default LostBanner
