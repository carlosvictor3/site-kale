import React from "react";
import "./ServiceCard.css"; // Estilo do card de serviços

function ServiceCard({ service }) {
    return (
        <div className="service-card">
            <img src={service.image} alt={service.name} className="service-image" />
            <div className="service-info">
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <p><strong>Preço:</strong> {service.price}</p>
                <button className="buy-button">Comprar</button>
            </div>
        </div>
    );
}

export default ServiceCard;
