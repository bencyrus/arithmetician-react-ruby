import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import GameContext from '../../context/GameContext'
import useQuestions from '../../hooks/useQuestions'
import './ScorePage.css'

const ScorePage = () => {
	const {
		score,
		setScore,
		duration,
		setDuration,
		additionRange,
		setAdditionRange,
		multiplicationRange,
		setMultiplicationRange,
		setQuestions,
	} = useContext(GameContext)
	const navigate = useNavigate()

	const { fetchQuestions } = useQuestions(
		{
			additionRange,
			multiplicationRange,
			duration,
		},
		(questions) => {
			setQuestions(questions)
			navigate('/game')
		},
		(error) => {
			alert('An error occurred while fetching the questions')
		}
	)

	const handleTryAgain = () => {
		setScore(0)
		fetchQuestions()
	}

	const handleChangeSettings = () => {
		setScore(0)
		setDuration(120)
		setAdditionRange({ min: 2, max: 100 })
		setMultiplicationRange({ min: 2, max: 12 })

		navigate('/')
	}

	return (
		<div id="score-page">
			<h1>Your Score: {score}</h1>
			<div className="buttons">
				<button onClick={handleChangeSettings}>Change Settings</button>
				<button onClick={handleTryAgain}>Try Again</button>
			</div>
		</div>
	)
}

export default ScorePage
