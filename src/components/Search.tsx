import { useState } from 'react'
import useQuerySearch from '../hooks/useQuerySearch'

function Search() {
  const [query, setQuery] = useState('')
  const results = useQuerySearch(query)

  const handleQueryChange = (e: React.FormEvent<HTMLInputElement>) => {
    setQuery(e.currentTarget.value)
  }
  return (
    <div style={{ position: 'relative' }}>
      <input type="text" value={query} onChange={handleQueryChange} />
      <div style={{ position: 'absolute' }}>
        {results &&
          results.length > 0 &&
          results.map((res, i) => {
            return (
              <div key={i} className="">
                <div
                  style={{
                    display: 'flex',
                    marginTop: '10px',
                    marginLeft: '6px',
                  }}
                >
                  <img
                    src={res.image}
                    alt={res.title}
                    width={74}
                    height={111}
                    loading="eager"
                    onError={(e) =>
                      (e.currentTarget.src = 'src/assets/search/errcsmall.png')
                    }
                  />
                  <div key={i} style={{ paddingLeft: '8px' }}>
                    {res.title}
                  </div>
                </div>
                <hr style={{ marginTop: '10px' }} />
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Search
