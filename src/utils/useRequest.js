import useSWR from 'swr';
import axios from 'axios';

export default function useRequest(request, { initialData, ...config } = {}) {
  return useSWR(
    request && JSON.stringify(request),
    () => axios(request || {}).then((response) => response.data),
    {
      ...config,
      initialData: initialData && {
        status: 200,
        statusText: 'InitialData',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        data: initialData,
      },
    }
  );
}
