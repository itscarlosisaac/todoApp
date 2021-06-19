import React from 'react';
import { Loading } from './components/Loading';
import { ThemeContext } from './context/ThemeContext';
import { TodoContext } from './context/TodoContext';

import { useFetch } from './hooks/useFetch';
import { AppRouter } from './routes/AppRouter';

function App() {

  const [todos, isLoading, error] = useFetch("https://jsonplaceholder.typicode.com/posts");

  return (

    <>
      <ThemeContext.Provider value={ "light" }>
        <TodoContext.Provider value={ null }>
          <AppRouter />
        </TodoContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
