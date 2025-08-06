import React from 'react';
import { BrowserRouter as Router,Link,Routes,Route } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import VolunteerForm from './component/VolunteerForm';
import Navbar from './component/Navbar'
import Footer from './component/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/volunteer" element={<VolunteerForm />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
