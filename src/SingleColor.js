import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ rgb, weight, type, hexColor, idx }) => {
  const [alert, setAlert] = useState(false)
  const bcg = rgb.join(',')
  const hexValue = `#${hexColor}`

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false)
    }, 3000)
    return () => {
      clearTimeout(timeout)
    }
  }, [alert])

  //Unused rgb to hex function
  const hex = rgbToHex(...rgb)

  return (
    <article
      onClick={() => {
        setAlert(true)
        navigator.clipboard.writeText(hexValue)
      }}
      className={`color ${idx > 10 ? 'color-light' : undefined}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  )
}

export default SingleColor
