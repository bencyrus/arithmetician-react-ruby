import PastGames from '../components/PastGames'
import GameSettingsForm from '../components/GameSettingsForm'

const HomePage = () => {
	return (
		<div
			id="home-page"
			style={{
				display: 'flex',
				justifyContent: 'space-between',
			}}
		>
			<div
				style={{
					flex: 1,
					maxWidth: 300,
					marginRight: '1rem',
				}}
			>
				<PastGames />
			</div>
			<div
				style={{
					flex: 2,
				}}
			>
				<h1>Home Page</h1>
				<GameSettingsForm />
			</div>
		</div>
	)
}

export default HomePage
