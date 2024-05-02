import appService from './axios'

export type dataType = string[]

export async function fetchQueryData(query: string) {
  const response = await appService.get<dataType>(`/api`, {
    params: { query: query },
  })
  return response.data
}
