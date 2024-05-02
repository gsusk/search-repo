import { useEffect, useState } from 'react'
import useQuerySearch from '../hooks/query'

function Search() {
  const [query, setQuery] = useState('')
  const results = useQuerySearch(query)

  const handleQueryChange = (e: React.FormEvent<HTMLInputElement>) => {
    setQuery(e.currentTarget.value)
  }

  return (
    <div>
      <input type="text" value={query} onChange={handleQueryChange} />
      <div>
        {results &&
          results.length > 0 &&
          results.map((res) => {
            return <div key={res}>{res}</div>
          })}
      </div>
    </div>
  )
}

export default Search
