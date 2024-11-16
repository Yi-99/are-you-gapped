import { useState, useEffect } from 'react'
import './App.css'

import { UserContext } from './UserContext.jsx';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SkillAnalyzerPage from './SkillAnalyzePage.jsx'
import HomePage from './HomePage.jsx'

function App() {
	const [user, setUser] = useState({
		user_id: uuidv4(),
		isSkillsAnalyzed: false,
	});

  return (
		<UserContext.Provider value={{ user, setUser }}>
			<Router>
					<Routes>
						<Route path="/" element={<HomePage/>}/>
						<Route path="/skill-analyze" element={<SkillAnalyzerPage/>}/>
					</Routes>
			</Router>
		</UserContext.Provider>
  )
}

export default App
