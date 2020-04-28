import { useState, useEffect } from 'react';
import { AxiosResponse, AxiosInstance } from 'axios';

export default (
  api: AxiosInstance,
  endpoint: string,
  dependencies?: any
): { fetchedData: AxiosResponse | null; error: string; fetching: boolean } => {
  const [fetchedData, setFetchedData] = useState<AxiosResponse | null>(null);
  const [error, setError] = useState<string>('');
  const [fetching, setFetching] = useState<boolean>(false);

  useEffect(() => {
    async function getFetchedData() {
      setFetching(true);
      try {
        const response = await api.get(endpoint);
        setFetchedData(response);
      } catch (error) {
        setError(error.toString());
      } finally {
        setFetching(false);
      }
    }
    getFetchedData();
  }, [api, endpoint, dependencies]);
  return { fetchedData, error, fetching };
};
