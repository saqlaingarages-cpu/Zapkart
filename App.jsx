import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
