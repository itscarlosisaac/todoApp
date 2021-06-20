import React from 'react'
import {
  Switch,
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { HomeScreen } from '../pages/HomeScreen';
import { TaskScreen } from '../pages/TaskScreen';

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route path="/todo/:todoId" component={TaskScreen} />
      </Switch>
    </Router>
  )
}
