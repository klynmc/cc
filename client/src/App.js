//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
        <div>
          <Nav />
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
