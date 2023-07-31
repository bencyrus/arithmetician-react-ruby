import { useState, useEffect } from 'react'
import { ClipLoader } from 'react-spinners'
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai'

const PastGamesListItem = ({ game }) => {
	const [isOpen, setIsOpen] = useState(false)
	const [gameDetails, setGameDetails] = useState(null)
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		if (isOpen) {
			setIsLoading(true)

			fetch(`/api/v1/games/${game.id}`)
				.then((res) => res.json())
				.then((data) => {
					setGameDetails(data)
					setIsLoading(false)
				})
				.catch((err) => console.log(err))
		}
	}, [isOpen, game.id])

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
					{isLoading ? (
						<div
							style={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								height: '50px',
							}}
						>
							<ClipLoader color="#000" />
						</div>
					) : gameDetails ? (
						<>
							<p>Duration: {gameDetails.settings.duration}</p>
							<p>
								Addition Range: [
								{gameDetails.settings.addition_range_start}..
								{gameDetails.settings.addition_range_end}]
							</p>
							<p>
								Multiplication Range: [
								{
									gameDetails.settings
										.multiplication_range_start
								}
								..
								{gameDetails.settings.multiplication_range_end}]
							</p>
							<p>Answered Questions:</p>
							<ul>
								{gameDetails.answeredQuestions.map(
									(question) => (
										<li key={question.id}>
											{question.num1} {question.op_type}{' '}
											{question.num2} = {question.answer}
										</li>
									)
								)}
							</ul>
						</>
					) : null}
				</div>
			)}
			<hr />
		</div>
	)
}

export default PastGamesListItem
