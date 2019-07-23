import {request} from './request';

jest.mock('~/core/sdk', () => ({
  sdk: {
    doorman: {
      getToken() {
        return 'doormantoken';
      },
    },
  },
}));

describe('request', () => {
  test('get', async () => {
    const fetchSpy = jest.spyOn(window, 'fetch').mockReturnValue({
      // @ts-ignore
      json: () => ({response: true}),
    });

    const result = await request({
      path: '/api/ginger/v4/searchaliases/',
      params: {
        param: 'test:some request',
      },
    });

    expect(fetchSpy.mock.calls).toMatchInlineSnapshot(`
      Array [
        Array [
          "http://localhost/api/ginger/v4/searchaliases/?param=test%3Asome+request",
          Object {
            "body": undefined,
            "headers": Object {
              "Content-Type": "application/json;charset=UTF-8",
            },
            "method": "get",
          },
        ],
      ]
    `);
    expect(result).toMatchInlineSnapshot(`
                  Object {
                    "response": true,
                  }
            `);

    fetchSpy.mockClear();
  });

  test('post', async () => {
    const fetchSpy = jest.spyOn(window, 'fetch').mockReturnValue({
      // @ts-ignore
      json: () => ({response: true}),
    });

    await request({path: '/api/ginger/v4/searchaliases/', method: 'post'});

    expect(fetchSpy.mock.calls).toMatchInlineSnapshot(`
      Array [
        Array [
          "http://localhost/api/ginger/v4/searchaliases/?",
          Object {
            "body": undefined,
            "headers": Object {
              "Authorization": "Bearer ZG9vcm1hbnRva2Vu",
              "Content-Type": "application/json;charset=UTF-8",
            },
            "method": "post",
          },
        ],
      ]
    `);

    fetchSpy.mockClear();
  });

  test('put', async () => {
    const fetchSpy = jest.spyOn(window, 'fetch').mockReturnValue({
      // @ts-ignore
      json: () => ({response: true}),
    });

    await request({path: '/path', params: {param: '1'}, method: 'put', payload: {data: true}});

    expect(fetchSpy.mock.calls).toMatchInlineSnapshot(`
      Array [
        Array [
          "http://localhost/path?param=1",
          Object {
            "body": "{\\"data\\":true}",
            "headers": Object {
              "Authorization": "Bearer ZG9vcm1hbnRva2Vu",
              "Content-Type": "application/json;charset=UTF-8",
            },
            "method": "put",
          },
        ],
      ]
    `);

    fetchSpy.mockClear();
  });
});
