export interface ServerResponseData<T> {
  statusCode: string,
  errorMsg?: string,
  traceId?: string,
  data: T,
}
