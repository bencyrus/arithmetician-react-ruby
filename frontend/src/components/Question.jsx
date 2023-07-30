import { useRef } from 'react'

const Question = ({ question, onCorrectAnswer }) => {
	const inputRef = useRef()

	const handleAnswer = (event) => {
		if (parseInt(event.target.value, 10) === question.answer) {
			onCorrectAnswer()
			event.target.value = ''
		}
	}

	return (
		<div>
			<span>{question.num1}</span>
			<span>{question.opType}</span>
			<span>{question.num2}</span>
			<input type="number" onChange={handleAnswer} ref={inputRef} />
		</div>
	)
}

export default Question
