import { useContext, useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import GameContext from '../context/GameContext'
import Question from '../components/Question'
import Timer from '../components/Timer'

const GamePage = () => {
	const {
		additionRange,
		multiplicationRange,
		duration,
		questions,
		setQuestions,
		score,
		setScore,
	} = useContext(GameContext)

	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
	const [answeredQuestions, setAnsweredQuestions] = useState([])
	const navigate = useNavigate()

	const setGame = useCallback(() => {
		console.log({
			additionRange,
			multiplicationRange,
			duration,
			score,
			endTimestamp: new Date(),
			answeredQuestions,
		})
		setQuestions([])
		setCurrentQuestionIndex(0)
		setAnsweredQuestions([])
		navigate('/score')
	}, [
		additionRange,
		multiplicationRange,
		duration,
		score,
		answeredQuestions,
		setQuestions,
		navigate,
	])

	const handleCorrectAnswer = () => {
		setScore((s) => s + 1)
		setAnsweredQuestions((aqs) => [...aqs, questions[currentQuestionIndex]])
		setCurrentQuestionIndex((ci) => ci + 1)
	}

	return (
		<div id="game-page">
			<div>
				<Timer initialTime={duration} onTimeOut={setGame} />
				<span>Score: {score}</span>
			</div>
			<div>
				<Question
					question={questions[currentQuestionIndex]}
					onCorrectAnswer={handleCorrectAnswer}
				/>
			</div>
		</div>
	)
}

export default GamePage
