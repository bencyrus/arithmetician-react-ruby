import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'
import GameContext from '../context/GameContext'
import Question from '../components/Question'
import Timer from '../components/Timer'
import useSubmitGame from '../hooks/useSubmitGame'

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

	const requestBody = {
		score,
		endTimestamp: new Date(),
		additionRange: additionRange,
		multiplicationRange: multiplicationRange,
		duration,
		answeredQuestions,
	}

	const onSubmitSuccess = (data) => {
		console.log(data)
		setQuestions([])
		setCurrentQuestionIndex(0)
		setAnsweredQuestions([])
		navigate('/score')
	}

	const onSubmitError = (error) => {
		console.error('Error:', error)
	}

	const { isLoading, submitGame } = useSubmitGame(requestBody, onSubmitSuccess, onSubmitError)

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
				<Timer initialTime={duration} onTimeOut={submitGame} />
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
			{isLoading && (
				<div
					style={{
						position: 'absolute',
						top: 0,
						bottom: 0,
						left: 0,
						right: 0,
						backgroundColor: 'rgba(255, 255, 255, 0.7)',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<ClipLoader color="#000" />
				</div>
			)}
		</div>
	)
}

export default GamePage
