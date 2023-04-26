import React from 'react'

function Banner({ status, buttonFn, buttonText, children }) {
  return (
    <div className={`${status} banner`}>
      {children}
      {buttonFn && buttonText && (
        <button onClick={buttonFn}>{buttonText}</button>
      )}
    </div>
  )
}

export default Banner
