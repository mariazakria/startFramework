import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Notfound from './Pages/Notfound/Notfound';
import Layout from './Layouts/layouts'; 
import Portfolio from './Pages/Portfolio/Portfolio';
import Home from './Pages/Home/Home';
import Contact from './Pages/Home/Contact/Contact';
import About from './Pages/About/About';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="/About" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />

          <Route index element={<Home />} /> 
          <Route path="*" element={<Notfound />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
