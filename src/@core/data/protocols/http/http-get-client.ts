export interface HttpGetClient {
  get: (url: string) => Promise<any>;
}
