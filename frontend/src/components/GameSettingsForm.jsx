import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import GameContext from '../context/GameContext'
import RangeInput from '../components/RangeInput'
import DurationSelect from '../components/DurationSelect'

import { getQuestionList } from '../backend'

const GameSettingsForm = () => {
	const { setQuestions } = useContext(GameContext)

	const {
		additionRange,
		setAdditionRange,
		multiplicationRange,
		setMultiplicationRange,
		duration,
		setDuration,
	} = useContext(GameContext)

	const navigate = useNavigate()

	const validateNotEmptyAndPositive = (range) => {
		const { min, max } = range
		return min && min >= 0 && max && max >= 0
	}

	const validateProperOrder = (range) => {
		const { min, max } = range
		return min < max
	}

	const handleSubmit = (event) => {
		event.preventDefault()

		if (
			!validateNotEmptyAndPositive(additionRange) ||
			!validateNotEmptyAndPositive(multiplicationRange)
		) {
			alert("Values can't be empty or less than 0!")
			return
		}

		if (
			!validateProperOrder(additionRange) ||
			!validateProperOrder(multiplicationRange)
		) {
			alert(
				"The first number can't be larger than or the same as the second number!"
			)
			return
		}

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
			<DurationSelect
				value={duration}
				onChange={setDuration}
				options={[
					{ value: 30, label: '30 seconds' },
					{ value: 60, label: '60 seconds' },
					{ value: 90, label: '90 seconds' },
					{ value: 120, label: '120 seconds' },
				]}
			/>
			<button type="submit">Start Game</button>
		</form>
	)
}

export default GameSettingsForm
