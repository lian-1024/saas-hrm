import { RequestClient } from "./request-client"

export enum RequestMethods {
  GET = 'get',
  POST = "post",
  PUT = "put",
  DELETE = "delete"
}


const createRequestClient = (baseURL: string) => {
  const client = new RequestClient({
    baseURL
  })

  client.addRequestInterceptor({
    fulfilled: (config) => config
  })

  client.addResponseInterceptor({
    fulfilled: (response) => response
  })

  return client
}

export const requestClient = createRequestClient("/")
export const baseRequestClient = new RequestClient({ baseURL: "/" })