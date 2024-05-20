// Responsible for fetching data, andle loading and error states
import {useEffect, useState} from "react";

export function useResource<T>(url: string): [T | null, boolean, string | null] {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
        .then(response => response.json())
        .then(data => setData(data.results[0]))
        .catch(() => setErrorMessage('Error fetching user'))
        .finally(() => setIsLoading(false))
  }, [url])

  return [data, isLoading, errorMessage];
}
