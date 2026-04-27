import { useEffect, useState } from "react";

export const useFetch = (fetchFn) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchFn()
      .then(setData)
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return data;
};
