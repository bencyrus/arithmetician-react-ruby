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
