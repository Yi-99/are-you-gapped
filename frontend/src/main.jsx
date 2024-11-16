import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
<<<<<<< Updated upstream

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
=======
import Pentagon from './component/Pentagon.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
		<App />
		<Pentagon />
>>>>>>> Stashed changes
  </React.StrictMode>,
)
