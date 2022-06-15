import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState('#f15025')
  const [error, setError] = useState(false)
  const [list, setList] = useState(new Values('#f15025').all(10))

  const handleSubmit = (e) => {
    setError(false)
    e.preventDefault()
    try {
      let colors = new Values(color).all(10)
      setList(colors)
    } catch (err) {
      setError(true)
      console.log(err)
    }
  }
  return (
    <>
      <section className="container">
        <h3>Color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            placeholder="#f15025"
            onChange={(e) => setColor(e.target.value)}
            className={error ? 'error' : undefined}
          />
          <button className="btn" type="submit">
            submit
          </button>
        </form>
      </section>

      <section className="colors">
        {list.map((item, idx) => {
          return (
            <SingleColor
              key={idx}
              {...item}
              hexColor={item.hex}
              idx={idx}
            ></SingleColor>
          )
        })}
      </section>
    </>
  )
}

export default App
