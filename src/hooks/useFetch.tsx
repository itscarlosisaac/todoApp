import { useState, useEffect } from 'react';
import { Todo } from '../types/types';

export const useFetch = ( url:string ):  [ Todo[], boolean, Error|null] => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | Error>(null);
  const [data, setData] = useState<Todo[]>([])

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then(data => data.json())
      .then(data => {
        setData(data)
        setIsLoading(false)
        setError(null);
      })
      .catch(e => {
        setError(e);
        setData([])
        setIsLoading(false)
      })
    setIsLoading(false);
  }, [url])

  return [data, isLoading, error];
}