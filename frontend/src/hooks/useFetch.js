import { useState, useCallback } from 'react'

const useFetch = (path, options) => {
	const [response, setResponse] = useState(null)
	const [error, setError] = useState(null)
	const [isLoading, setIsLoading] = useState(false)

	const fetchData = useCallback(async () => {
		setIsLoading(true)
		try {
			const res = await fetch(path, options)
			const json = await res.json()
			setResponse(json)
			setIsLoading(false)
		} catch (error) {
			setError(error)
			setIsLoading(false)
		}
	}, [path, options])

	return { response, error, isLoading, fetchData }
}

export default useFetch
