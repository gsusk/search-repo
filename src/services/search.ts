import appService from './axios'

type dataType = string[]

export async function fetchQueryData(query: string) {
  appService
    .post<dataType>('/api', query, { params: query })
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      console.error(err)
    })
}
