import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

{/* Don't forget to import the remaining paths
    So, when you click on <Links> it'll bring you to the correct path 
    That means you need to create multiple <Route> tags*/}
function App() {

  return (
    <>
    <Router>
      <Navbar />
      {/* Need to change switch tags to Routes tag  */}
      <Routes>
        {/* Multiple <Route> tags to will utilize pages directory's content */}
        <Route path='/' exact Component={Home}/>
        {/* <Route path='./components/pages/Services' component={Services} /> */}
        <Route path = '/services' element={<Services/>}/>
        {/* <Route path='/products' component={Products} /> */}
        <Route path = '/products' element={<Products/>} />
        {/* <Route path='/sign-up' component={SignUp} /> */}
        <Route path = '/sign-up' element={<SignUp/>} />
      </Routes>
    </Router>
      
    </>
  );
}

export default App;
