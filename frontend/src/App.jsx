import { useState } from 'react'
import './App.css'
import lelandImage from './assets/leland.png'

function App() {
	const backgroundStyle = {
		backgroundImage: `url(${lelandImage})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center',
    height: '100vh',
    width: '100vw',
    margin: 0,
    padding: 0
	}

  return (
		<div style={backgroundStyle}>
			
		</div>
  )
}

export default App