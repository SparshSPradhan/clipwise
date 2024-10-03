import React from 'react';
import Header from './components/Header';
import Products from './components/Products';
import SpecialOffer from './components/SpecialOffer';
import './App.css'; // Custom styles for the whole app
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Products />
      <SpecialOffer />
      <Footer />
    </div>
  );
}

export default App;
