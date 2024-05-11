import { useEffect, useState } from 'react'
import { fetchQueryData, MovieSearch } from '../services/search'

type Props = string

export default function useQuerySearch(query: Props): MovieSearch[] {
  const [results, setResults] = useState<MovieSearch[]>([])

  useEffect(() => {
    console.log('refresh!2')
    if (query.trimStart() === '') {
      return setResults([])
    }
    let ignore = false
    const timer = setTimeout(() => {
      const fetchData = async () => {
        try {
          const data = await fetchQueryData(query)
          console.log(data)
          if (!ignore) setResults(data)
        } catch (err) {
          console.log(err)
          if (!ignore) setResults([])
        }
      }
      fetchData()
    }, 20)

    return () => {
      clearTimeout(timer)
      ignore = true
    }
  }, [query])
  return results
}
