import { HttpClient } from "../data/protocols/http/http-client";

export class HttpClientSpy implements HttpClient {
  url?: string;
  async request(data: any): Promise<any> {
    this.url = data.url;
    return {
      statusCode: 200,
      data: [],
    };
  }
}
