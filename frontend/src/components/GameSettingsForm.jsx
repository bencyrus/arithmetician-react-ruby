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

	const handleSubmit = (event) => {
		event.preventDefault()

		// Ensure addition and multiplication ranges are not empty and numbers are not less than 0
		if (
			!additionRange.min ||
			additionRange.min < 0 ||
			!additionRange.max ||
			additionRange.max < 0 ||
			!multiplicationRange.min ||
			multiplicationRange.min < 0 ||
			!multiplicationRange.max ||
			multiplicationRange.max < 0
		) {
			alert("Values can't be empty or less than 0!")
			return
		}

		// Ensure that the first number isn't larger than or equal to the second number
		if (
			additionRange.min >= additionRange.max ||
			multiplicationRange.min >= multiplicationRange.max
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
