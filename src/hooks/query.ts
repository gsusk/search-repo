import { useEffect, useState } from 'react'
import { dataType, fetchQueryData } from '../services/search'

type Props = string

export default function useQuerySearch(query: Props) {
  const [result, setResult] = useState<dataType>([])

  useEffect(() => {
    if (query !== '') {
      const fetchData = async () => {
        try {
          const data = await fetchQueryData(query)
          setResult(data)
        } catch (err) {
          console.log(err)
          setResult([])
        }
      }
      fetchData()
    }
  }, [query])
  return [result]
}
