import { useState, useEffect } from 'react'
import './App.css'
import lelandImage from './assets/leland.png'
import CareerProgress from './component/careerProgress'
import { SkillGapAnalyzerModal } from './component/SkillGapAnalyzerModal'
import PersonIcon from '@mui/icons-material/Person';
import { UserContext } from './UserContext.jsx';
import { v4 as uuidv4 } from 'uuid';

function App() {
	const [user, setUser] = useState({
		user_id: uuidv4(),
		isSkillsAnalyzed: false,
	});

	const backgroundStyle = {
		backgroundImage: `url(${lelandImage})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center',
    height: '100vh',
    width: '100vw',
    margin: 0,
    padding: 0
	}

	const [showModal, setShowModal] = useState(false);

	const handleModalClick = () => {
		setShowModal(!showModal);
	}

	useEffect(() => {
		console.log(showModal);
	}, [showModal])

  return (
		<UserContext.Provider value={{ user, setUser }}>
			<div style={backgroundStyle}>
				{ showModal ? (
					<div className="modal-container bottom-4 right-4 absolute">
							<SkillGapAnalyzerModal showModal={showModal} setShowModal={setShowModal}/>
						</div>
					) : (
						<div className="modal-button w-12 h-12 bg-[#185440] rounded-full absolute bottom-4 right-4 flex justify-center items-center cursor-pointer" onClick={handleModalClick}>
							<PersonIcon className="text-white" />
						</div>
					)
				}
			</div>
		</UserContext.Provider>
  )
}

export default App
