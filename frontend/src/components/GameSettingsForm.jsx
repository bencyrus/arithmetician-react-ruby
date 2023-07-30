import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import GameContext from '../context/GameContext'
import RangeInput from '../components/RangeInput'
import DurationSelect from '../components/DurationSelect'

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

const GameSettingsForm = () => {
	const navigate = useNavigate()
	const { setQuestions } = useContext(GameContext)

	const {
		additionRange,
		setAdditionRange,
		multiplicationRange,
		setMultiplicationRange,
		duration,
		setDuration,
	} = useContext(GameContext)

	const handleSubmit = (event) => {
		event.preventDefault()
		console.log('additionRange', additionRange)
		console.log('multiplicationRange', multiplicationRange)
		console.log('duration', duration)

		getQuestionList(additionRange, multiplicationRange, duration).then(
			(questionList) => {
				setQuestions(questionList)
				navigate('/game')
			}
		)
	}

	return (
		<form onSubmit={handleSubmit}>
			<RangeInput
				value={additionRange}
				onChange={setAdditionRange}
				label="Addition Range"
			/>
			<RangeInput
				value={multiplicationRange}
				onChange={setMultiplicationRange}
				label="Multiplication Range"
			/>
			<DurationSelect value={duration} onChange={setDuration} />
			<button type="submit">Start Game</button>
		</form>
	)
}

export default GameSettingsForm
