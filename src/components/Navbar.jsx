import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-900 text-white">
      <h1 className="text-xl font-bold">Mi Portafolio</h1>
      <div className="space-x-4">
        <Link to="/">Inicio</Link>
        <Link to="/proyectos">Proyectos</Link>
        <Link to="/sobre-mi">Sobre mí</Link>
        <Link to="/contacto">Contacto</Link>
      </div>
    </nav>
  );
};

export default Navbar;
