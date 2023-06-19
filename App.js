import './App.css';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function Home({ mode }) {
  return (
    <TextForm heading='Enter the text to analyze' mode={mode} />
  );
}

export default function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#343a40';
      document.body.style.color = 'white';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = '#343a40';
    }
  };

  return (

    <Router>
      <Navbar title='KrishUtils' mode={mode} toggleMode={toggleMode} />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home mode={mode} />} />
          <Route path="/about" element={<About mode={mode} />} />
        </Routes>
      </div>
    </Router>

  );
}
