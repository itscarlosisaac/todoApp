import { useState, useEffect } from 'react';
import { Todo } from '../types/types';

export const useFetch = ( url:string, initialstate:Todo[] ):  [ Todo[], boolean, Error|null] => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<null | Error>(null);
  const [data, setData] = useState<Todo[]>(initialstate)

  useEffect(() => {
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
  }, [url])

  return [data, isLoading, error];
}