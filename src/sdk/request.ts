import {AuthHandler} from './auth';

type RequestMethod = 'get' | 'post' | 'put' | 'patch' | 'delete';

export interface RequestParams {
  path: string;
  params?: Record<string, string>;
  method?: RequestMethod;
  headers?: Record<string, string>;
  payload?: object | FormData;
}

export async function request<T>({
  path,
  params,
  method = 'get',
  headers,
  payload,
}: RequestParams): Promise<T> {
  const searchParams = params ? `?${new URLSearchParams(params)}` : '';
  const url = new URL(searchParams, new URL(path, window.location.href));

  const defaultHeaders: HeadersInit = {};
  defaultHeaders['Accept'] = 'application/json';
  defaultHeaders['Content-Type'] = 'application/json';

  const body = payload && JSON.stringify(payload);
  defaultHeaders.Authorization = `Bearer ${AuthHandler.getToken()}`;

  const resp = await fetch(url.href, {
    method,
    headers: {...defaultHeaders, ...headers},
    body,
  });

  const result = await resp.json();

  if (result && result.errorMsg) {
    console.log(result.errorMsg);
  }

  return result;
}
