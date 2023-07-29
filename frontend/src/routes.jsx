import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import HomePage from './pages/HomePage'
import GamePage from './pages/GamePage'
import ScorePage from './pages/ScorePage'

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{ path: '', element: <HomePage /> },
			{ path: 'game', element: <GamePage /> },
			{ path: 'score', element: <ScorePage /> },
		],
	},
])

export default router
