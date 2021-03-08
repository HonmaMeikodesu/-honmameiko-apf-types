export interface ServerResponseData<T> {
  statusCode: string,
  errorMsg?: string,
  data: T,
}
