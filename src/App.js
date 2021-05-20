import React from 'react';
import Header from './components/Header';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import ProductListing from './components/ProductListing';
import ProductDetail from './components/ProductDetail';


const App = () => {
  return (
    <div>
      <Router>
        <Header/>
        <Switch>
          <Route path='/' exact component={ProductListing}/>
          <Route path='/products/:productId' component={ProductDetail}/>
          <Route>404 error!! page not found</Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
