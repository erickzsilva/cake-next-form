import { CakeResponse } from "../sharedTypes/types"
import axios, { AxiosResponse } from "axios"

const baseUrl: string = 'https://api.mocki.io/v2/a687db22/cake-response'

export const requestDate = async (): Promise<CakeResponse> => {
  return axios
    .get(`${baseUrl}`)
    .then((response: AxiosResponse<CakeResponse>) => {
      return response.data
    })
}