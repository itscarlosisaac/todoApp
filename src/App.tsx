import { useEffect, useReducer } from 'react';
import { TodoContext } from './context/TodoContext';
import { useFetch } from './hooks/useFetch';
import { AppRouter } from './routes/AppRouter';
import { initialState } from './store/store';
import { TodoReducer } from './reducer/todoReducer';
import { fetchingTodos } from './reducer/todoActions';
import { LoadingPage } from './pages/LoadingPage';

function App() {

  const [reducerState, dispatch] = useReducer(TodoReducer, initialState)
  
  const [todos, isLoading, error] = useFetch("https://jsonplaceholder.typicode.com/todos");
  useEffect(() => {
    dispatch(fetchingTodos(todos, isLoading, error))
  }, [todos, isLoading, error])

  if (isLoading) {
    return <LoadingPage />
  }
  return (

    <>
      {/* <ThemeContext.Provider value={ "light" }> */}
        <TodoContext.Provider value={ [reducerState, dispatch] }>
          <AppRouter />
        </TodoContext.Provider>
      {/* </ThemeContext.Provider> */}
    </>
  );
}

export default App;
