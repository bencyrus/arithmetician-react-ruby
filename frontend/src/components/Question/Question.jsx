import { useState } from 'react'

const Question = ({ question, onCorrectAnswer }) => {
	const [answer, setAnswer] = useState('')

	const handleAnswer = (event) => {
		setAnswer(event.target.value)
		if (parseInt(event.target.value, 10) === question.answer) {
			onCorrectAnswer()
			setAnswer('')
		}
	}

	return (
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
				fontSize: '2em',
				gap: '1rem',
			}}
		>
			<span>{question.num1}</span>
			<span>{question.opType}</span>
			<span>{question.num2}</span>
			<input type="number" value={answer} onChange={handleAnswer} />
		</div>
	)
}

export default Question
