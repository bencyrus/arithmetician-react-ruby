import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'
import GameContext from '../context/GameContext'
import RangeInput from '../components/RangeInput'
import DurationSelect from '../components/DurationSelect'
import useQuestions from '../hooks/useQuestions'

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
		<div>
			<form
				onSubmit={handleSubmit}
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					maxWidth: '400px',
					margin: 'auto',
				}}
			>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						width: '100%',
						gap: '10px',
					}}
				>
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
					<button
						type="submit"
						style={{
							width: '50%',
							height: '30px',
							alignSelf: 'center',
						}}
					>
						Start Game
					</button>
				</div>
			</form>
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

export default GameSettingsForm
