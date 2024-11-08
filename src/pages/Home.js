import React from "react";
import "./Home.css";
import { Link } from "react-router-dom"; // Para navegação interna

function Home() {
    return (
        <div className="home-overlay">
            <div className="home-container">
                {/* Seção de apresentação */}
                <section className="intro">
                    <h2>Bem-vindo ao Studio Kalê</h2>
                    <p>
                        Com mais de 10 anos de tradição, o Studio Kalê é um salão de beleza que oferece uma experiência completa e acolhedora. Em nossas três unidades, os clientes podem desfrutar de serviços de alta qualidade, pacotes exclusivos e uma linha selecionada de produtos. Nosso compromisso é elevar sua autoestima com práticas inovadoras e atendimento personalizado.
                    </p>
                    <p>
                        Aqui, você pode adquirir antecipadamente serviços e pacotes, agendar o horário e escolher seu profissional preferido para um atendimento único.
                    </p>
                </section>

                {/* Prévia de serviços */}
                <section className="preview-section">
                    <h3>Conheça Nossos Serviços</h3>
                    <div className="preview-cards">
                        <div className="card">
                            <img src="/images/corte.jpg" alt="Corte de Cabelo" />
                            <h4>Corte de Cabelo</h4>
                            <p>Realizado por especialistas em cortes femininos e masculinos.</p>
                            <Link to="/services" className="button-link">Ver mais</Link>
                        </div>
                        <div className="card">
                            <img src="/images/manicure.jpg" alt="Manicure" />
                            <h4>Manicure</h4>
                            <p>Cuidados completos para suas unhas com as melhores técnicas.</p>
                            <Link to="/services" className="button-link">Ver mais</Link>
                        </div>
                        <div className="card">
                            <img src="/images/progressiva.jpg" alt="Progressiva" />
                            <h4>Progressiva</h4>
                            <p>Realizado por especialistas em progressiva com produtos de referência.</p>
                            <Link to="/services" className="button-link">Ver mais</Link>
                        </div>
                    </div>
                </section>

                {/* Prévia de produtos */}
                <section className="preview-section">
                    <h3>Destaques de Produtos</h3>
                    <div className="preview-cards">
                        <div className="card">
                            <img src="/images/shampoo.jpg" alt="Shampoo" />
                            <h4>Shampoo</h4>
                            <p>Para todos os tipos de cabelo, oferecendo brilho e hidratação.</p>
                            <Link to="/products" className="button-link">Ver mais</Link>
                        </div>
                        <div className="card">
                            <img src="/images/condicionador.jpg" alt="Condicionador" />
                            <h4>Condicionador</h4>
                            <p>Deixe seus cabelos macios e fáceis de pentear.</p>
                            <Link to="/products" className="button-link">Ver mais</Link>
                        </div>
                        <div className="card">
                            <img src="/images/oleo.jpg" alt="Shampoo" />
                            <h4>Shampoo</h4>
                            <p>Para todos os tipos de cabelo, oferecendo brilho e hidratação.</p>
                            <Link to="/products" className="button-link">Ver mais</Link>
                        </div>
                    </div>
                </section>

                {/* Chamada para ação e informações de compra antecipada */}
                <section className="cta-section">
                    <h3>Compre e Agende Antecipadamente</h3>
                    <p>
                        Garanta seu atendimento comprando antecipadamente nossos serviços e pacotes. Escolha seu horário e profissional preferido para uma experiência personalizada e exclusiva.
                    </p>
                    <Link to="/services" className="cta-button">Agendar Agora</Link>
                </section>
            </div>
        </div>
    );
}

export default Home;
