import { useState, useEffect } from 'react'
import { ClipLoader } from 'react-spinners'
import PastGamesListItem from '../PastGamesListItem'
import './PastGames.css'

const PastGames = () => {
	const [pastGames, setPastGames] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	const handleDeleteGame = (id) => {
		setPastGames((pgs) => pgs.filter((pg) => pg.id !== id))
	}

	useEffect(() => {
		setIsLoading(true)

		fetch('/api/games')
			.then((res) => res.json())
			.then((data) => {
				setPastGames(data)
				setIsLoading(false)
			})
			.catch((err) => console.log(err))
	}, [])

	return (
		<div style={{ position: 'relative', minHeight: '100px' }}>
			{isLoading ? (
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
			) : (
				<>
					<h1>Past Games</h1>
					<div className="game-list">
						{pastGames.map((game) => (
							<PastGamesListItem
								key={game.id}
								game={game}
								onDelete={handleDeleteGame}
							/>
						))}
					</div>
				</>
			)}
		</div>
	)
}

export default PastGames
