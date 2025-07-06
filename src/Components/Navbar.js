import { Link } from 'react-router-dom';

const Navbar = () => (
  <header className="navbar">
    <div className="logo">
      <img src="/assets/iso_antroponos.png" alt="Antroponos" />
    </div>
    <nav>
      <ul>
        <li><Link to="/Cultura">Cultura</Link></li>
        <li><a href="#">Sobre Nosotros</a></li>
        <li><a href="#">Contacto</a></li>
        <li><a href="#">Tienda</a></li>
        <li><Link to="/Home">Home</Link></li>
        <li><a href="#">Perfil</a></li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
