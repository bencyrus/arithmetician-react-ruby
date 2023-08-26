import { useState, useEffect } from 'react'

const Timer = ({ initialTime, onTimeOut }) => {
	const [timer, setTimer] = useState(initialTime)

	useEffect(() => {
		if (timer <= 0) {
			onTimeOut()
		} else {
			const intervalId = setInterval(() => setTimer((t) => t - 1), 1000)
			return () => clearInterval(intervalId)
		}
	}, [timer])

	return <span>Seconds left: {timer}</span>
}

export default Timer
