import { useEffect, useState } from 'react'
import { dataType, fetchQueryData } from '../services/search'

type Props = string

export default function useQuerySearch(query: Props): dataType {
  const [results, setResults] = useState<dataType>([])

  useEffect(() => {
    console.log('refresh!2')
    if (query === '') return setResults([])
    const timer = setTimeout(() => {
      const fetchData = async () => {
        try {
          const data = await fetchQueryData(query)
          setResults(data)
        } catch (err) {
          console.log(err)
          setResults([])
        }
      }
      fetchData()
    }, 100)

    return () => {
      clearTimeout(timer)
    }
  }, [query])
  return results
}
