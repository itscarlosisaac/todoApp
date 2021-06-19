import React, {useContext} from 'react'
import { Search } from '../components/Search'
import { TodoList } from '../components/Todos/TodoList'
import { ThemeContext } from '../context/ThemeContext'
import { TodoContext } from '../context/TodoContext'
import { useFetch } from '../hooks/useFetch'

export class HomeScreen extends React.Component {

  constructor(props: any) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
  }



  render() {
    return (
      <div style={{backgroundColor: "#f7f8fa"}}>
        <Search/>
        <TodoList />
      </div>
    )
  }
}
