import { Component } from 'react'
import { Header } from '../components/Header';
export class TaskScreen extends Component<any,any> {

  constructor(props: any) {
    super(props)
    this.handleGoBack = this.handleGoBack.bind(this);
  }

  handleGoBack() {
    this.props.history.goBack();
  }

  render() {
    const {id, completed, title } = this.props.location.state
    return (
      <div className="p-0 m-0 bg-blueish-100 min-h-screen min-w-screen" >
        <Header/>
        <main className="px-4 flex flex-col items-center pt-10">
          <section className="max-w-2xl w-full">
            <div className="py-4 flex justify-between w-full items-center">
              <h1 className="sub">Tasks </h1>
              <button className="px-4 py-2 rounded-full bg-indigo-500 text-white" onClick={this.handleGoBack } >Go Back</button>
            </div>
            <article className="p-6 shadow-sm bg-white rounded-md">
              <h1 className="text-2xl font-semibold text-blueish-800"><span className="mr-2 text-orange-500">{ id }.</span>{title}</h1>
              {completed && <small className="text-blueish-400">This task was completed. <strong>Congratulations!</strong></small>}
              <hr className="my-2"/>
              <p  className="mt-4 text-blueish-500">Here should be the description of this task.</p>
            </article>
          </section>
        </main>
      </div>
    )
  }
}
