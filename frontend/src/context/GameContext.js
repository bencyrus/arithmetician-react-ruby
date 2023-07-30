import { createContext } from 'react'

const GameContext = createContext({
	additionRange: { min: 2, max: 100 },
	multiplicationRange: { min: 2, max: 12 },
	duration: 120,
	setAdditionRange: () => {},
	setMultiplicationRange: () => {},
	setDuration: () => {},

	questions: [],
	setQuestions: () => {},
	score: 0,
	setScore: () => {},
})

export default GameContext
