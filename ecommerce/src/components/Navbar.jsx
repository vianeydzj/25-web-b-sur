import { NavLink } from "react-router-dom";

const Navbar = () => { 
    return (
        
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
            <a class="navbar-brand" href="https://www.amazon.com.mx/ref=nav_logo">
                Commerce
                </a>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
            <a class="nav-link active">
            <NavLink to="/" className="btn btn-outline-primary">Inicio</NavLink>
            </a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">
            <NavLink to="About" className="btn btn-outline-primary">Iniciar Sesión</NavLink>
            </a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">
            <NavLink to="Blog" className="btn btn-outline-primary">Registro</NavLink>
            </a>
            </li>
            </ul>
            </div>
            </div>
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
            </nav>
    ); 
};

export default Navbar;

