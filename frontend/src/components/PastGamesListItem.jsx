import { useState } from 'react'
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai'

const PastGamesListItem = ({ game }) => {
	const [isOpen, setIsOpen] = useState(false)

	const handleToggle = () => {
		setIsOpen(!isOpen)
	}

	return (
		<div>
			<div
				style={{ display: 'flex', justifyContent: 'space-between' }}
				onClick={handleToggle}
			>
				<p>Score: {game.score}</p>
				<p>{new Date(game.end_timestamp).toLocaleString()}</p>
				{isOpen ? <AiOutlineUp /> : <AiOutlineDown />}
			</div>
			{isOpen && (
				<div style={{ marginLeft: '1rem' }}>
					<p>Game ID: {game.id}</p>
					<p>Game Settings ID: {game.gameSettingsId}</p>
				</div>
			)}
			<hr />
		</div>
	)
}

export default PastGamesListItem
