import { useEffect, useCallback } from 'react'
import useFetch from './useFetch'

const useSubmitGame = (gameData, onSuccess, onError) => {
	const { response, error, isLoading, fetchData } = useFetch('/api/games', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(gameData),
	})

	const submitGame = useCallback(() => {
		fetchData()
	}, [fetchData])

	useEffect(() => {
		if (response && !error) {
			onSuccess(response)
		} else if (error) {
			onError(error)
		}
	}, [response, error, onSuccess, onError])

	return { isLoading, submitGame }
}

export default useSubmitGame
