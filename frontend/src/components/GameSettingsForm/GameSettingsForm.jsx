import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'
import GameContext from '../../context/GameContext'
import RangeInput from '../RangeInput'
import DurationSelect from '../DurationSelect'
import useQuestions from '../../hooks/useQuestions'
import './GameSettingsForm.css'

const GameSettingsForm = () => {
	const {
		additionRange,
		setAdditionRange,
		multiplicationRange,
		setMultiplicationRange,
		duration,
		setDuration,
		setQuestions,
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

	const { isLoading, fetchQuestions } = useQuestions(
		{
			additionRange,
			multiplicationRange,
			duration,
		},
		(questions) => {
			setQuestions(questions)
			navigate('/game')
		},
		(error) => {
			alert('An error occurred while fetching the questions')
		}
	)

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

		fetchQuestions()
	}

	return (
		<div id="game-settings-form">
			<form onSubmit={handleSubmit}>
				<div className="container">
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
					<button type="submit" className="start-game-button">
						Start Game
					</button>
				</div>
			</form>
			{isLoading && (
				<div className="loading-overlay">
					<ClipLoader color="#000" />
				</div>
			)}
		</div>
	)
}

export default GameSettingsForm
