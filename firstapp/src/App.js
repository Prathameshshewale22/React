import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Productadd from './components/Productadd';
import Productlist from './components/Productlist'
import Editprod from './components/Editprod';
// import { useEffect, useState } from 'react';
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';
// import ProductService from './components/ProductService';
import ProductCard from './components/Productcard';

function App() {
  return (
    <div>
     <div>
    <Header></Header>
    <Router>
      <Link to="/list">List</Link>|<Link to="/add">Addproduct</Link>|<Link to="/edit">edit</Link>
      <Switch>
        <Route path="/list" exact component={Productlist}></Route>
        <Route path="/add" component={Productadd}></Route>
        <Route path="/edit" component={Editprod}></Route>
        <Route path="/view" component={ProductCard}></Route>
        
      </Switch>
    </Router>
      </div>
     
      </div>
  );
}

export default App;
