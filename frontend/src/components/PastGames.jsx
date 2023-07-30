import PastGameListItem from './PastGameListItem'

const PastGames = () => {
	const pastGames = [
		{
			id: 1,
			gameSettingsId: 101,
			score: 30,
			timestamp: '2023-07-20T20:20:39+00:00',
		},
		{
			id: 2,
			gameSettingsId: 102,
			score: 45,
			timestamp: '2023-07-21T15:10:29+00:00',
		},
		{
			id: 3,
			gameSettingsId: 103,
			score: 50,
			timestamp: '2023-07-22T18:05:10+00:00',
		},
		{
			id: 4,
			gameSettingsId: 104,
			score: 35,
			timestamp: '2023-07-23T21:30:50+00:00',
		},
		{
			id: 5,
			gameSettingsId: 105,
			score: 40,
			timestamp: '2023-07-24T22:15:35+00:00',
		},
	]

	return (
		<div>
			<h1>Past Games</h1>
			{pastGames.map((game) => (
				<PastGameListItem key={game.id} game={game} />
			))}
		</div>
	)
}

export default PastGames
