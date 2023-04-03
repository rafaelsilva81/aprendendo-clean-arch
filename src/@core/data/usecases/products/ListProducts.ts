import { HttpGetClient } from "../../protocols/http/http-get-client";

export class ListProduct {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpGetClient
  ) {}

  async execute() {
    return this.httpClient.get(this.url);
  }
}
