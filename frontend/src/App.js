import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Story } from './components/Story';
import { FeaturedCharacter } from './components/FeaturedCharacter';
import { Characters } from './components/Characters';
import { Chapters } from './components/Chapters';
import { Gameplay } from './components/Gameplay';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Home = () => {
  const helloWorldApi = async () => {
    try {
      const response = await axios.get(`${API}/`);
      console.log(response.data.message);
    } catch (e) {
      console.error(e, `errored out requesting / api`);
    }
  };

  useEffect(() => {
    helloWorldApi();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <Story />
      <FeaturedCharacter />
      <Characters />
      <Chapters />
      <Gameplay />
      <CTA />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
