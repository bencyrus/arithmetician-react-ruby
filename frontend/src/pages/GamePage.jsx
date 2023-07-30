import { useContext, useState, useRef, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import GameContext from '../context/GameContext'

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
	const [timer, setTimer] = useState(duration)
	const [answeredQuestions, setAnsweredQuestions] = useState([])
	const inputRef = useRef()
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
		setTimer(duration)
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

	useEffect(() => {
		if (timer <= 0) {
			setGame()
		} else {
			const intervalId = setInterval(() => {
				setTimer((t) => t - 1)
			}, 1000)

			return () => clearInterval(intervalId)
		}
	}, [timer, setGame])

	const handleAnswer = (event) => {
		if (
			parseInt(event.target.value, 10) ===
			questions[currentQuestionIndex].answer
		) {
			setScore((s) => s + 1)
			setAnsweredQuestions((aqs) => [
				...aqs,
				questions[currentQuestionIndex],
			])
			setCurrentQuestionIndex((ci) => ci + 1)
			event.target.value = ''
		}
	}

	return (
		<div id="game-page">
			<div>
				<span>Seconds left: {timer}</span>
				<span>Score: {score}</span>
			</div>
			<div>
				{questions.length > currentQuestionIndex ? (
					<>
						<span>{questions[currentQuestionIndex].num1}</span>
						<span>{questions[currentQuestionIndex].opType}</span>
						<span>{questions[currentQuestionIndex].num2}</span>
						<input
							type="number"
							onChange={handleAnswer}
							ref={inputRef}
						/>
					</>
				) : (
					<div>
						<h1>Your Score: {score}</h1>
						<button onClick={() => navigate('/')}>
							Change Settings
						</button>
						<button
							onClick={() => {
								setTimer(duration)
								inputRef.current.focus()
							}}
						>
							Try Again
						</button>
					</div>
				)}
			</div>
		</div>
	)
}

export default GamePage
