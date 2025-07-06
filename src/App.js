// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Cultura from './Pages/Cultura';
import './Styles/styles_.css'; // Importar los estilos globales

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cultura" element={<Cultura />} />
      </Routes>
    </Router>
  );
}

export default App;
