import { useContext } from 'react'
import GameContext from '../context/GameContext'
import RangeInput from '../components/RangeInput'
import DurationSelect from '../components/DurationSelect'

const GameSettingsForm = () => {
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
