import React, { Component } from 'react'
import { TodoList } from '../components/Todos/TodoList'
import { Header } from '../components/Header';
import { Filter } from '../components/Filters/Filter';
import { Search } from '../components/Search';
export class HomeScreen extends Component {

  constructor(props: any) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="p-0 m-0 bg-blueish-100 min-h-screen min-w-screen" >
        <Header/>
        <main className="px-4 flex flex-col items-center pt-10">
          <section className="max-w-2xl w-full">
            <div className="flex-grow flex justify-center ">
              <Search />
            </div>
            <div className="py-4 flex justify-between w-full items-center">
              <h1>Tasks </h1>
              <Filter/>
            </div>
            <TodoList />
          </section>
        </main>
      </div>
    )
  }
}
