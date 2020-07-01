import api from "../index";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

describe("Lib API", () => {
  let mock: MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.restore();
    mock.reset();
  });

  it("Post method without params", async () => {
    let response = {
      success: true,
    };
    let url: string = `/api/v3/login`;

    mock.onPost(url).reply(200, response);

    let { data } = await api.post(url);

    expect(data).toMatchObject(response);
  });

  it("Post method without params", async () => {
    let response = {
      success: true,
    };
    let url: string = `/api/v3/login`;

    mock.onGet(url).reply(200, response);

    let { data } = await api.get(url);

    expect(data).toMatchObject(response);
  });

  it("Post method with params", async () => {
    let response = {
      success: true,
    };
    let url: string = `/api/v3/login`;

    mock.onPost(url).reply(200, response);

    let { data } = await api.post(url);

    expect(data).toMatchObject(response);
  });

  it("GET method with params", async () => {
    let response = {
      success: true,
    };

    let url: string = `/api/v3/login`;
    mock.onGet(url).reply(200, response);

    let { data }: any = await api.get(url);

    expect(data).toMatchObject(response);
  });
});
