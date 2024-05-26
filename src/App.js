import React from 'react';
import WebSets from './components/WebSets';
import Write from './components/Write';
import Footer from './components/Footer';
import Landing from './components/LandingPage';
import Navbar from './components/Navbar';
import Newsletter from './components/ComingSoon';

function App() {
  return (
    <div>
      <Navbar />
      <Landing />
      <WebSets />
      <Write />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
