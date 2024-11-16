import React, { useContext } from 'react'
import { UserContext } from './UserContext.jsx'

const SkillAnalyzePage = () => {
	const { user } = useContext(UserContext);

	return (
		<div>SkillAnalyzerPage</div>
	)
}

export default SkillAnalyzePage