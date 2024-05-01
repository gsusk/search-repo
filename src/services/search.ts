import appService from './axios'

type dataType = string[]

export async function fetchQueryData(query: string): Promise<dataType | void> {
  try {
    const response = await appService.get<dataType>(`/api`, {
      params: { query: query },
    })
    return response.data
  } catch (err) {
    console.log(err)
  }
}
