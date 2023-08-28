import React from 'react'
import PastGames from '../components/PastGames'
import GameSettingsForm from '../components/GameSettingsForm'
import './HomePage.css'

const HomePage = () => {
	return (
		<div id="home-page">
			<div id="past-games">
				<PastGames />
			</div>
			<div id="game-settings">
				<h1>Game Settings</h1>
				<GameSettingsForm />
			</div>
		</div>
	)
}

export default HomePage
