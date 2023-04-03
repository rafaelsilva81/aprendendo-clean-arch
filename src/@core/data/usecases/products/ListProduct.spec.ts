import { HttpGetClient } from "../../protocols/http/http-get-client";
import { ListProduct } from "./ListProducts";

describe("ListProduct", () => {
  test("should call httpclient with correct url", async () => {
    class HttpClientSpy implements HttpGetClient {
      url?: string;

      async get(url: string) {
        this.url = url;
        return Promise.resolve();
      }
    }

    const url = "any_url";
    const httpClient = new HttpClientSpy();
    const sut = new ListProduct(url, httpClient);

    await sut.execute();

    expect(httpClient.url).toBe(url);
  });
});
