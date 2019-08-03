import { useEffect, useState } from 'react';

export const useFetch = (url: string, def: any) => {
    const [data, setData] = useState(def);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      setLoading(true);
      ( async () => {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
      setLoading(false);
      })()
    }, [url]);
    return [data, loading];
  }