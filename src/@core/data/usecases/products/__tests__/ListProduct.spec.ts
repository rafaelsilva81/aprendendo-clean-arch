import { MockHttpClient } from "@app/@core/mocks/http-client.mock";
import { ListProduct } from "@app/@core/data/usecases/products/ListProducts";
import { faker } from "@faker-js/faker";

type SutTypes = {
  sut: ListProduct;
  httpClient: MockHttpClient<any>;
};

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpClient = new MockHttpClient();
  const sut = new ListProduct(url, httpClient);

  return {
    sut,
    httpClient,
  };
};

describe("ListProduct", () => {
  test("should call httpclient with correct url", async () => {
    const url = faker.internet.url();
    const { sut, httpClient } = makeSut(url);

    // Create a mock implementation of the request method
    const requestSpy = jest.spyOn(httpClient, "request");

    await sut.execute();

    // Assert that the request method was called with the correct URL
    expect(requestSpy).toHaveBeenCalledWith(expect.objectContaining({ url }));
  });
});
