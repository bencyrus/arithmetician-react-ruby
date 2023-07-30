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
		const requestBody = {
			score,
			endTimestamp: new Date(),
			additionRange: additionRange,
			multiplicationRange: multiplicationRange,
			duration,
			answeredQuestions,
		}

		fetch('/api/v1/games', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(requestBody),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data)
				setQuestions([])
				setCurrentQuestionIndex(0)
				setAnsweredQuestions([])
				navigate('/score')
			})
			.catch((error) => {
				console.error('Error:', error)
			})
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
		<div
			id="game-page"
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'flex-start',
				alignItems: 'center',
				height: '100vh',
				paddingTop: '10px',
			}}
		>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					width: '95%',
				}}
			>
				<Timer initialTime={duration} onTimeOut={setGame} />
				<span>Score: {score}</span>
			</div>
			<div
				style={{
					flexGrow: 1,
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					width: '100%',
				}}
			>
				<Question
					question={questions[currentQuestionIndex]}
					onCorrectAnswer={handleCorrectAnswer}
				/>
			</div>
		</div>
	)
}

export default GamePage
