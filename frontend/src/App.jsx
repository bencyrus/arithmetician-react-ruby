import { Outlet } from 'react-router-dom'
import GameProvider from './context/GameProvider'

function App() {
	return (
		<GameProvider>
			<div className="App">
				<Outlet />
			</div>
		</GameProvider>
	)
}

export default App
