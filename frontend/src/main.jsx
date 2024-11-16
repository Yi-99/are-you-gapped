import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Pentagon from './component/Pentagon.jsx';
import OverallScore from './component/OverallScore.jsx';
import ChartDescription from './component/ChartDescription.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Pentagon />
    <OverallScore />
    <ChartDescription />
  </React.StrictMode>,
)
