import { useState } from 'react'
import GameContext from './GameContext'

const GameProvider = ({ children }) => {
	const [additionRange, setAdditionRange] = useState({ min: 2, max: 100 })
	const [multiplicationRange, setMultiplicationRange] = useState({
		min: 2,
		max: 12,
	})
	const [duration, setDuration] = useState(120)

	const [questions, setQuestions] = useState([])
	const [score, setScore] = useState(0)

	return (
		<GameContext.Provider
			value={{
				additionRange,
				multiplicationRange,
				duration,
				setAdditionRange,
				setMultiplicationRange,
				setDuration,
				questions,
				score,
				setQuestions,
				setScore,
			}}
		>
			{children}
		</GameContext.Provider>
	)
}

export default GameProvider
