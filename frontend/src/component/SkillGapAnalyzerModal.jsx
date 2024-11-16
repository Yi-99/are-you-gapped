import { useStatus, useEffect, useContext } from 'react';
import { UserContext } from '../UserContext';
import CloseIcon from '@mui/icons-material/Close';
import profileImage from '../assets/profile.png';
import './SkillGapAnalyzerModal.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Pentagon from './Pentagon';

export const SkillGapAnalyzerModal = ({ showModal, setShowModal }) => {
	// TODO: Need to add a state that tells if the user has already answered the skill analysis questions.

	const { user, setUser } = useContext(UserContext);

	console.log("user.isSkillsAnalyzed", user.isSkillsAnalyzed);

	const handleCloseButton = () => {
		setShowModal(!showModal);
	}

	return (
		<div className='skill-gap-container p-4 m-4 rounded-lg bg-[#185440] flex flex-col'>
			<div className='header flex flex-row justify-between items-center'>
				<span>Skill Gap Analyzer</span>
				<button
					className='close-button bg-transparent text-end items-center cursor-pointer text-sm'
					onClick={handleCloseButton}
				>
					<CloseIcon className="text-white" fontSize="inherit"/>
				</button>
			</div>
			<div className='body flex flex-col justify-center items-center h-full'>
				{
					!user.isSkillsAnalyzed ? (
						<div className='profile-container mb-10'>
							<img src={profileImage} alt="profile" className="rounded-full"/>
							<span>John Doe</span>
							<div className="info-container w-max flex flex-col justify-center items-center">
								<a className="link text-white" href=""><em>ARE YOU GAPPED?</em></a>
							</div> 
						</div>
						) : (
							<Pentagon className='justify-center' outerRadius={50} width={300} height={300}/>
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