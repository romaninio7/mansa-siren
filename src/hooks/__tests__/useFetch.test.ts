import { renderHook } from '@testing-library/react-hooks';
import useFetch from 'hooks/useFetch';
import axios, { AxiosInstance } from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios);
const mockData = 'response';
const url = 'http://mock';
const endpoint = '/554564';
const axiosInstance: AxiosInstance = axios.create({
  baseURL: url,
});

it('useFetch makes a valid GET request', async () => {
  mock.onGet(url + endpoint).reply(200, mockData);

  const { result, waitForNextUpdate } = renderHook(() =>
    useFetch(axiosInstance, endpoint)
  );

  expect(result.current.fetchedData).toEqual(null);
  expect(result.current.fetching).toBeTruthy();

  await waitForNextUpdate();

  expect(result.current.fetchedData?.data).toEqual('response');
  expect(result.current.fetching).toBeFalsy();
});

test('useFetch starts fetching and returns null on network error', async () => {
  mock.onGet(url + endpoint).networkError();

  const { result, waitForNextUpdate } = renderHook(() =>
    useFetch(axiosInstance, endpoint)
  );

  expect(result.current.fetchedData).toEqual(null);
  expect(result.current.fetching).toBeTruthy();
  expect(result.current.error).toEqual('');

  await waitForNextUpdate();

  expect(result.current.fetchedData).toEqual(null);
  expect(result.current.fetching).toBeFalsy();
  expect(result.current.error).not.toBe('');
});
