import {
  HttpClient,
  HttpRequest,
  HttpResponse,
  HttpStatusCode,
} from "@app/@core/data/protocols/http/http-client";

export class MockHttpClient<R> implements HttpClient<R> {
  request(req: HttpRequest): Promise<HttpResponse<R>> {
    return Promise.resolve({
      statusCode: HttpStatusCode.ok,
      data: {} as R,
      message: "Mock HTTP response",
    });
  }
}
