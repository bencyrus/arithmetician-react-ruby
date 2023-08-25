import { useEffect } from 'react'
import useFetch from './useFetch'

const useQuestions = (settings, onSuccess, onError) => {
	const { response, error, isLoading, fetchData } = useFetch(
		'/api/questions',
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(settings),
		}
	)

	useEffect(() => {
		if (response && !error) {
			onSuccess(response)
		} else if (error) {
			onError(error)
		}
	}, [response, error, onSuccess, onError])

	return { isLoading, fetchQuestions: fetchData }
}

export default useQuestions
