import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import GameContext from '../context/GameContext'

import { getQuestionList } from '../backend'

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

	const handleTryAgain = () => {
		setScore(0)

		getQuestionList(additionRange, multiplicationRange, duration).then(
			(questionList) => {
				setQuestions(questionList)
				navigate('/game')
			}
		)
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
			<button onClick={handleChangeSettings}>Change Settings</button>
			<button onClick={handleTryAgain}>Try Again</button>
		</div>
	)
}

export default ScorePage
