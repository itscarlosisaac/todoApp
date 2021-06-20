import { useEffect, useReducer, useState, useRef, useCallback } from 'react';
import { TodoContext } from './context/TodoContext';
import { AppRouter } from './routes/AppRouter';
import { initialState } from './store/store';
import { TodoReducer } from './reducer/todoReducer';
import { fetchingTodos } from './reducer/todoActions';
import { Todo } from './types/types';

export const App = () => {

  const [reducerState, dispatch] = useReducer(TodoReducer, initialState)
  const [page, setPage] = useState(1);
  const [prevY, setPrevY] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [todos, setTodos] = useState<Todo[]>([]);
  const [error, setError] = useState<Error | null>(null);

  const scrollable = useRef<HTMLDivElement>(null);

  const getData = async (p:number) => {
    setIsLoading(true);
  
    return fetch(`https://jsonplaceholder.typicode.com/todos?_page=${p}&_limit=10`)
      .then(data => data.json())
      .then(async (data) => {
        const fetchedTodos = [...todos, ...data]
        await setIsLoading(false);
        await setError(null);
        await setTodos(fetchedTodos);
        dispatch(fetchingTodos(fetchedTodos, isLoading, error))
      })
      .catch(e => {
        setIsLoading(false);
        setError(e);
        setTodos([]);
      })
  }
  
  const handleObserver = useCallback((entries) => {
    
    // const target = entries[0];
    // if (prevY > target.boundingClientRect.y) {
    //   setPage((prev) => prev + 1);
    // }
    // setPrevY(target.boundingClientRect.y);
  }, []);

  useEffect(() => {
    window.onscroll = (s:any) => {
      console.log(s.target.body.scrollHeight);
    }
    return () => { window.onscroll = null };
  }, [])

  useEffect(() => {
    getData(page)
  }, [page])

  useEffect(() => {
    const options = {
      root:null,
      rootMargin: "0px",
      threshold: 1.0
    };
    const observer = new IntersectionObserver(handleObserver, options);
    observer.observe(scrollable.current!);
  }, [handleObserver])

  return (
    <div style={{ minHeight: "100vh" }}>
      <TodoContext.Provider value={[reducerState, dispatch]}>
        <AppRouter  />
      </TodoContext.Provider>
      <div ref={scrollable} style={{ height: "100px", margin: "30px" }}>
        {isLoading && <span>Loading...</span>}
      </div>
    </div>
  );
}