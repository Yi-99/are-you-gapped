import { useStatus, useEffect, useContext } from 'react';
import { UserContext } from '../UserContext';
import CloseIcon from '@mui/icons-material/Close';
import profileImage from '../assets/profile.png';
import './SkillGapAnalyzerModal.css';
import { Link } from 'react-router-dom';
import Pentagon from './Pentagon';

export const SkillGapAnalyzerModal = ({ showModal, setShowModal }) => {
	// TODO: Need to add a state that tells if the user has already answered the skill analysis questions.

	const { user, setUser } = useContext(UserContext);

	console.log("user.isSkillsAnalyzed", user.isSkillsAnalyzed);

	const handleCloseButton = () => {
		setShowModal(!showModal);
	}

	return (
		<div className='skill-gap-container p-4 m-4 rounded-lg bg-white shadow-2xl flex flex-col'>
			<div className='header flex flex-row justify-between items-center'>
				<span>Skill Gap Analyzer</span>
				<button
					className='close-button bg-transparent text-end items-center cursor-pointer text-sm'
					onClick={handleCloseButton}
				>
					<CloseIcon className="text-[#185440]" fontSize="inherit"/>
				</button>
			</div>
			<div className='body flex flex-col justify-start items-center h-full'>
				{
					!user.isSkillsAnalyzed ? (
						<>
							<div className='profile-container bg-[#9BD8BB] rounded-md mb-10 flex flex-col shadow-md justify-center items-center'>
								<div className="profile">
									<img src={profileImage} alt="profile" className="rounded-full"/>
								</div>
								<span>John Doe</span>
							</div>
							<div className="info-container w-max h-fit m-4 p-4 flex flex-col justify-center items-center">
								<Link to="/skill-analyzer" className="link text-white bg-[#185440] p-2 rounded-md shadow-md">
									ARE YOU GAPPED? Start Skill Analysis
								</Link>
							</div> 
						</>
						) : (
							<Pentagon outerRadius={50} width={300} height={300}/>
						)
				}
				
				{/* // TODO: Replace this with a Route that redirects the user to skill gap analyzer qusetion profileImage
					// TODO: Replace this with a Route that redirects the user to skill gap analyzer page if the user already has answered questions */}

			</div>
			<div className='footer'>

			</div>
		</div>
	)
}