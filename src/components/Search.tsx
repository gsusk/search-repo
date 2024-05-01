import { useEffect, useState } from 'react'

type dataType = string[]

function Search() {
  const [query, setQuery] = useState('')

  const handleQueryChange = (e: React.FormEvent<HTMLInputElement>) => {
    setQuery(e.currentTarget.value)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchData()
    }, 100)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <div>
      <input type="text" value={query} onChange={handleQueryChange} />
      <div>{null && <ul></ul>}</div>
    </div>
  )
}

export default Search
