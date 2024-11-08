import React from "react";
import "./ProductCard.css"; // Estilo do card de produtos

function ProductCard({ product }) {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p><strong>Preço:</strong> {product.price}</p>
                <button className="buy-button">Comprar</button>
            </div>
        </div>
    );
}

export default ProductCard;
