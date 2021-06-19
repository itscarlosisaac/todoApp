import React from 'react'
import {
  Switch,
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { HomeScreen } from '../pages/HomeScreen';

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={HomeScreen} />
        <Route path="/todo/:todoId" component={() => <h1>TODO</h1>} />
      </Switch>
    </Router>
  )
}
