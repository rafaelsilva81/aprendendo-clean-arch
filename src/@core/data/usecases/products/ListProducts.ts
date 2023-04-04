import { HttpClient } from "@app/@core/data/protocols/http/http-client";

export class ListProduct {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient
  ) {}

  async execute() {
    return this.httpClient.request({
      url: this.url,
      method: "get",
    });
  }
}
