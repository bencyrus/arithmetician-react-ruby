import { useState, useEffect } from 'react'
import useFetch from './useFetch'

const useQuestions = (settings, onSuccess, onError) => {
	const { response, error, isLoading, fetchData } = useFetch()
	const [shouldFetch, setShouldFetch] = useState(false)

	useEffect(() => {
		if (shouldFetch) {
			fetchData('/api/v1/questions', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(settings),
			})
			setShouldFetch(false)
		}
	}, [settings, fetchData, shouldFetch])

	useEffect(() => {
		if (response && !error) {
			onSuccess(response)
		} else if (error) {
			onError(error)
		}
	}, [response, error, onSuccess, onError])

	const doFetch = () => setShouldFetch(true)

	return { isLoading, fetchQuestions: doFetch }
}

export default useQuestions
