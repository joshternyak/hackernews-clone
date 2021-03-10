import React from 'react'
import './App.scss'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Nav from './Nav'
import Posts from './Posts'
import Post from './Post'
import User from './User'

function App() {
  return (
    <Router>
      <div className="App">
        <div className="App__inner">
          <Nav />

          <Switch>
            <Route exact path="/" render={() => <Posts />} />
            <Route exact path="/new" render={() => <Posts />} />
            <Route exact path="/post" component={Post} />
            <Route exact path="/user" component={User} />
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
