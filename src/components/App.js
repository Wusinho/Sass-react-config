import React from 'react'
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import store from '../store/configureStore'
import Dashboard from './Dashboard'
import Home from './Home'

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Router>
            <Switch>
              <Route exact path={'/'} component={Home} />
              <Route exact path={'/dashboard'} component={Dashboard} />
            </Switch>
        </Router>
      </Provider>
    </div>
  )
}

export default App
