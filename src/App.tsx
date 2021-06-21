import { useEffect, useReducer, useState, useCallback } from 'react';
import { TodoContext } from './context/TodoContext';
import { AppRouter } from './routes/AppRouter';
import { initialState } from './store/store';
import { TodoReducer } from './reducer/todoReducer';
import { fetchingTodos } from './reducer/todoActions';

export const App = () => {

  const [reducerState, dispatch] = useReducer(TodoReducer, initialState)
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const { page } = reducerState

  const getData = useCallback(async (p: number) => {
    setIsLoading(true);
    return fetch(`https://jsonplaceholder.typicode.com/todos?_page=${p}&_limit=10`)
      .then(data => data.json())
      .then(async (data) => {
        await setIsLoading(false);
        await setError(null);
        dispatch(fetchingTodos(data, isLoading, error))
      })
      .catch(e => {
        setIsLoading(false);
        setError(e);
      })
  }, [])

  useEffect(() => {
    getData(page)
  }, [page, getData])

  return (
    <div style={{ minHeight: "100vh" }}>
      <TodoContext.Provider value={[reducerState, dispatch]}>
        <AppRouter  />
      </TodoContext.Provider>
    </div>
  );
}