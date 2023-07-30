import { useContext } from 'react'
import GameContext from '../context/GameContext'

const GamePage = () => {
	const { questions } = useContext(GameContext)

	return (
		<div id="game-page">
			<h1>Game Page</h1>
			<p>Questions:</p>
			<ul>
				{questions.map((question, index) => (
					<li
						key={index}
					>{`${question.num1} ${question.opType} ${question.num2} = ${question.answer}`}</li>
				))}
			</ul>
		</div>
	)
}

export default GamePage
