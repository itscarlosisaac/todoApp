import { Component } from 'react'
import { Header } from '../components/Header';

export class TaskScreen extends Component {

  constructor(props: any) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div className="p-0 m-0 bg-blueish-100 min-h-screen min-w-screen" >
        <Header/>
        <main className="px-4 flex flex-col items-center pt-10">
          <section className="max-w-2xl w-full">
            <div className="py-4 flex justify-between w-full items-center">
              <h1>Task </h1>
              <button>Go Back</button>
            </div>
          </section>
        </main>
      </div>
    )
  }
}
