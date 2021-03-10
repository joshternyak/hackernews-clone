import React from 'react'
import './App.scss'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Nav from './components/Nav'
import Posts from './components/Posts'
import Post from './components/Post'
import User from './components/User'
import Loading from './components/Loading'

function App() {
  return (
    <Router>
      <div className="App">
        <div className="App__inner">
          <Nav />
          <React.Suspense fallback={<Loading />}>
            <Switch>
              <Route exact path="/" render={() => <Posts type="top" />} />
              <Route path="/new" render={() => <Posts type="new" />} />
              <Route path="/post" component={Post} />
              <Route path="/user" component={User} />
              <Route render={() => <h1>Uh oh, 404...</h1>} />
            </Switch>
          </React.Suspense>
        </div>
      </div>
    </Router>
  )
}

export default App
