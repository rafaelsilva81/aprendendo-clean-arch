import config from "@app/@core/config";
import {
  HttpRequest,
  HttpResponse,
  HttpClient,
} from "@app/@core/data/protocols/http/http-client";
import axios, { AxiosInstance, AxiosResponse } from "axios";

export class AxiosHttpClient implements HttpClient {
  httpClient: AxiosInstance;
  constructor() {
    this.httpClient = axios.create({
      baseURL: config.env.API_URL,
    });
  }

  async request(data: HttpRequest): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse;
    try {
      axiosResponse = await this.httpClient.request({ ...data });
    } catch (error: any) {
      axiosResponse = error.response;
    }
    return {
      statusCode: axiosResponse.status,
      data: axiosResponse.data.response,
      message: axiosResponse.data.message,
    };
  }
}
