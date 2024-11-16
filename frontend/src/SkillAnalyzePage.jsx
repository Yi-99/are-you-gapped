import React, { useContext } from 'react'
import { UserContext } from './UserContext.jsx'
import Header from './component/Header'
import OverallScore from './component/OverallScore.jsx';
import Pentagon from './component/Pentagon.jsx';
import CareerProgress from './page/GapAnalyzer'
import './SkillAnalyzePage.css'

const SkillAnalyzePage = () => {
	const { user } = useContext(UserContext);

	return (
		<div className="">
			<div className="flex flex-col justify-center items-start flex-wrap">
				<div className="nav-container flex flex-row justify-start">
					<Header />
				</div>
			</div>
			<div className="body flex flex-col p-4 m-4">
				<p className="text-[#185440] text-4xl font-extrabold">Result & Feedback</p>
				<p className="text-[#185440] text-start flex-wrap">This radar chart evaluates your skill and guides you through your career journey.</p>
				<div className="green-br"></div>
				<div className='body flex flex-row justify-around mb-16'>
					<div className="radar-chart-container shadow-md p-4 m-4 flex flex-row justify-center items-center w-fit">
						<Pentagon cx={250} cy={250} outerRadius={125} width={500} height={500}/>
					</div>
					<div className="overall-score-container shadow-md p-8 m-8 mx-8 flex flex-col justify-center items-center w-fit">
						<OverallScore />
					</div>
				</div>
				<CareerProgress />
				<p className="text-[#185440] text-4xl mt-16 font-extrabold">We have a study plan for you!</p>
				<p className="text-[#185440] text-start flex-wrap">This is a plan. you will meet with the advisor to further discuss the topics.</p>
				<div className="green-br"></div>
			</div>
		</div>
	)
}

export default SkillAnalyzePage