import React, { useState, useEffect } from 'react'
import logo from '../../logo.svg'
import Credits from '../credits'
import './app.css'

function App() {
  const [quote, setQuote] = useState('')

  useEffect(() => {
    fetch('https://api.kanye.rest')
      .then((response) => response.json())
      .then((data) => setQuote(data.quote))
      .catch((error) =>
        console.log(`There was an error while fetching quote: ${error}`),
      )
    return () => {
      console.log('all memory cleanup will happen here...')
    }
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Quote Analyser</h2>
        <textarea rows="6" cols="48" value={quote} onChange />
        <Credits />
      </header>
    </div>
  )
}

export default App
