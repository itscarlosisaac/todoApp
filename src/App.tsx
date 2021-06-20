import { useEffect, useReducer, useState, useRef } from 'react';
import { TodoContext } from './context/TodoContext';
import { useFetch } from './hooks/useFetch';
import { AppRouter } from './routes/AppRouter';
import { initialState } from './store/store';
import { TodoReducer } from './reducer/todoReducer';
import { fetchingTodos } from './reducer/todoActions';
import { LoadingPage } from './pages/LoadingPage';

function App() {

  const [reducerState, dispatch] = useReducer(TodoReducer, initialState)
  const [page, setPage] = useState(0);
  const [prevY, setPrevY] = useState(0);
  const loadingRef = useRef<HTMLDivElement>(null);
  
  // const [todos, isLoading, error] = useFetch("https://my-json-server.typicode.com/itscarlosisaac/todoApp/tasks");
  const [todos, isLoading, error] = useFetch(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=10`);

  //
  useEffect(() => {
    dispatch(fetchingTodos(todos, isLoading, error))
  }, [todos, isLoading, error])

  // useEffect(() => {
  //   attachObserver()
  // }, [])

  const attachObserver = () => {
    let options = {
      root:null,
      rootMargin: "0px",
      threshold: 0.1
    };
    let observer = new IntersectionObserver(handleObserver, options);
    observer.observe(loadingRef.current!);
  }

  const handleObserver = (entities: any, observer: any) => {
    const y = entities[0].boundingClientRect.y;
    console.log("Y",y)
    console.log("PREV:",prevY)
    if (prevY > y) {
      console.log(":HEY")
      // const lastPhoto = this.state.photos[this.state.photos.length - 1];
      // const curPage = lastPhoto.albumId;
      setPage((page) => page + 1);
    }
    setPrevY(y);
    console.log("PAGE:",page)
  }

  // if (isLoading) {
  //   return (<LoadingPage />)
  // }


  return (

    <div style={{ minHeight: "800px" }}>
      <TodoContext.Provider value={[reducerState, dispatch]}>
          <AppRouter  />
      </TodoContext.Provider>
      {/* <div ref={loadingRef} >
        <span>Loading...</span>
      </div> */}
    </div>
  );
}

export default App;
