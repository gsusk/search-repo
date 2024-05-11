import appService from './axios'

export type Movies = {
  id: string
  title: string
  alternative_titles: string[]
  year: number
  image: string
  color: string | null
  score: number
  rating: number
  actors: string[]
  actor_facets: string[]
  genre: string[]
}

export type MovieSearch = Pick<Movies, 'title' | 'image' | 'year' | 'score'>

export async function fetchQueryData(query: string) {
  const response = await appService.get<MovieSearch[]>(`/api/search`, {
    params: { q: query },
  })
  return response.data
}
