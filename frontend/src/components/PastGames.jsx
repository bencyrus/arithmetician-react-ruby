import { useEffect } from 'react'
import { ClipLoader } from 'react-spinners'
import PastGamesListItem from './PastGamesListItem'
import useFetch from '../hooks/useFetch'

const PastGames = () => {
	const { response, error, isLoading, fetchData } = useFetch()
	const pastGames = response || []

	useEffect(() => {
		fetchData('/api/v1/games')
	}, [fetchData])

	if (error) {
		return <div>An error occurred: {error.message}</div>
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
						<PastGamesListItem key={game.id} game={game} />
					))}
				</>
			)}
		</div>
	)
}

export default PastGames
