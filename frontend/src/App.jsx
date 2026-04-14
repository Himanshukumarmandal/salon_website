import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Admin from './pages/Admin';
import Navbar from './components/Navbar';
import WhatsAppBtn from './components/WhatsAppBtn';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        <WhatsAppBtn />
      </div>
    </Router>
  );
}

export default App;
