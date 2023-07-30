import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import GameContext from '../context/GameContext'

const getQuestionList = (additionRange, multiplicationRange, duration) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve([
				{
					num1: 1,
					num2: 2,
					opType: '+',
					answer: 3,
				},
				{
					num1: 13,
					num2: 4,
					opType: '-',
					answer: 9,
				},
				{
					num1: 5,
					num2: 6,
					opType: '*',
					answer: 30,
				},
				{
					num1: 56,
					num2: 8,
					opType: '/',
					answer: 7,
				},
			])
		}, 2000) // simulate network delay
	})
}

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

		navigate('/game')
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
