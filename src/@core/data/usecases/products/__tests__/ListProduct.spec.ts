import { HttpClientSpy } from "../../../protocols/http/__tests__/http-client.mock";
import { ListProduct } from "../ListProducts";

describe("ListProduct", () => {
  test("should call httpclient with correct url", async () => {
    const url = "any_url";
    const httpClient = new HttpClientSpy();
    const sut = new ListProduct(url, httpClient);

    await sut.execute();

    expect(httpClient.url).toBe(url);
  });
});
