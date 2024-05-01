import appService from './axios'

export async function fetchQueryData(query: string) {
  return appService.post()
}
