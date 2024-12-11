import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Infographics from './views/infographics'
import Articles from './views/articles'
import Home from './views/home'
import Infographicsdetails from './views/infographicsdetails'
import NotFound from './views/not-found'
import ArticleCategoryDetails from './views/article-category-details'
import ArticleDetails from './views/article-details'
import About from './views/about'
import Contact from './views/contact'
import PaymentDetails from './views/payment-details'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Articles} exact path="/articles" />
        <Route component={ArticleDetails} exact path="/article-details" />
        <Route component={Infographicsdetails} exact path="/infographicsdetails" />
        <Route component={ArticleCategoryDetails} exact path="/article-category-details"/>
        <Route component={Infographics} exact path="/infographics" />
        <Route component={Articles} exact path="/articles" />
        <Route component={About} exact path="/about" />
        <Route component={Contact} exact path="/contact" />
        <Route component={Home} exact path="/" />
        <Route component={PaymentDetails} exact path="/payment-details" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
