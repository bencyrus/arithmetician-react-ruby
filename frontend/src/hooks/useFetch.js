import { useState, useCallback } from 'react'

const useFetch = () => {
  const [response, setResponse] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const fetchData = useCallback(async (path, options) => {
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
  }, [])

  return { response, error, isLoading, fetchData }
}

export default useFetch
