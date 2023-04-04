import { HttpClientSpy } from "../../../../mocks/http-client.mock";
import { ListProduct } from "../ListProducts";
import { faker } from "@faker-js/faker";

type SutTypes = {
  sut: ListProduct;
  httpClient: HttpClientSpy;
};

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpClient = new HttpClientSpy();
  const sut = new ListProduct(url, httpClient);

  return {
    sut,
    httpClient,
  };
};

describe("ListProduct", () => {
  test("should call httpclient with correct url", async () => {
    const url = "other_url";
    const { sut, httpClient } = makeSut(url);
    await sut.execute();
    expect(httpClient.url).toBe(url);
  });
});
