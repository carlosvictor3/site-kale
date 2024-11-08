import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Importar o CSS específico da NavBar
import { FaInstagram, FaWhatsapp } from "react-icons/fa"; // Importar ícones do react-icons

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">


                <Link to="/">
                    <img src="/images/logo.png" alt="Logotipo do Salão" className="logo-image" />
                </Link>

                <h1>Studio Kalê</h1>
            </div>
            <div className="navbar-links">
                <Link to="/">Home</Link>
                <Link to="/about">Sobre</Link>
                <Link to="/services">Serviços</Link>
                <Link to="/products">Produtos</Link>
                <Link to="/contact">Contato</Link>
            </div>
            <div className="navbar-icons">
                <a
                    href="https://www.instagram.com/kalemapband/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-link"
                >
                    <FaInstagram />
                </a>
                <a
                    href="https://api.whatsapp.com/send/?phone=5521969652237&text&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-link"
                >
                    <FaWhatsapp />
                </a>
            </div>
        </nav>
    );
}

export default Navbar;
