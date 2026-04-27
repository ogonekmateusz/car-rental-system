import { useEffect, useState } from 'react'

export const useFetch = <T>(fetchFn: () => Promise<T>) => {
  const [data, setData] = useState<T | null>(null)

  useEffect(() => {
    fetchFn().then(setData)
  }, [fetchFn])

  return data
}