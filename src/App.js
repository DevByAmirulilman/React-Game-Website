import React from 'react';
//components and pages
import Home from './pages/Home'

//import global style
import GlobalStyle from './components/GlobalStyle';
import {Route} from 'react-router-dom';  
import Nav from './components/Nav';
import Hero from './components/Hero';


function App() {
  
  return (
    <div className="App">
      <GlobalStyle/>
      <Hero/>
      <Nav/>
      <Route path={["/games/:id","/"]}>
      <Home/>
      </Route>
    </div>
  );
}

export default App;
