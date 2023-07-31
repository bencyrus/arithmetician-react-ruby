import { useEffect, useState } from 'react'
import { ClipLoader } from 'react-spinners'
import PastGamesListItem from './PastGamesListItem'
import useFetch from '../hooks/useFetch'

const PastGames = () => {
	const { response, error, isLoading, fetchData } = useFetch()
	const [pastGames, setPastGames] = useState([])

	useEffect(() => {
		setPastGames(response || [])
	}, [response])

	useEffect(() => {
		fetchData('/api/v1/games')
	}, [fetchData])

	if (error) {
		return <div>An error occurred: {error.message}</div>
	}

	const handleDeleteGame = async (id) => {
		try {
			const response = await fetch(`/api/v1/games/${id}`, {
				method: 'DELETE',
			})
			if (!response.ok) {
				throw new Error('Error when deleting the game')
			}
			const updatedGames = pastGames.filter((game) => game.id !== id)
			setPastGames(updatedGames)
		} catch (error) {
			console.error('Error:', error)
		}
	}

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
					{pastGames.map((game) => (
						<PastGamesListItem
							key={game.id}
							game={game}
							onDelete={handleDeleteGame}
						/>
					))}
				</>
			)}
		</div>
	)
}

export default PastGames
