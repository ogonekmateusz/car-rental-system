import { useEffect, useState } from "react";

export const useFetch = <T>(
  fetchFn: () => Promise<T>,
  deps: any[] = [],
): T | null => {
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    fetchFn().then(setData);
  }, deps); // <-- Tutaj przekazujemy deps zamiast samego [fetchFn]

  return data;
};
