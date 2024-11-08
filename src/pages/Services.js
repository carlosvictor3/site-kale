import React from "react";
import ServiceCard from "../components/ServiceCard";

function Services() {
    const services = [
        {
            id: 1,
            name: "Corte de Cabelo",
            description: "Corte feminino e masculino com estilistas experientes.",
            price: "R$50,00", // Adicione o preço aqui
            image: "/images/corte.jpg" // Adicione a imagem correspondente na pasta public/images
        },
        {
            id: 2,
            name: "Manicure",
            description: "Manicure completa com técnicas modernas.",
            price: "R$50,00", // Adicione o preço aqui
            image: "/images/manicure.jpg"
        },
        {
            id: 3,
            name: "Hidratação Capilar",
            description: "Tratamento profundo para hidratação dos fios.",
            price: "R$50,00", // Adicione o preço aqui
            image: "/images/hidratacao.jpg"
        },
        {
            id: 4,
            name: "Coloração",
            description: "Tintura com cores vibrantes e duradouras.",
            price: "R$50,00", // Adicione o preço aqui
            image: "/images/coloracao.jpg"
        },
        {
            id: 5,
            name: "Massagem Relaxante",
            description: "Massagem que alivia o estresse e melhora a circulação.",
            price: "R$50,00", // Adicione o preço aqui
            image: "/images/massagem.jpg"
        },

        {
            id: 6,
            name: "Mechas",
            description: "Faça sua avaliação de mechas com um profissional especializado.",
            price: "R$50,00", // Adicione o preço aqui
            image: "/images/mechas.jpg"
        },

        {
            id: 7,
            name: "Progressiva",
            description: "Escova progressiva com os melhores produtos do mercado.",
            price: "R$50,00", // Adicione o preço aqui
            image: "/images/progressiva.jpg"
        },

        {
            id: 8,
            name: "Pacote Tratamento",
            description: "Escolha o pacote de tratamento que mais se adpta a sua rotina.",
            price: "R$50,00", // Adicione o preço aqui
            image: "/images/pacote.jpg"
        },


    ];

    return (
        <section className="services-section">
            <h2>Nossos Serviços</h2>
            <div className="service-list">
                {services.map(service => (
                    <ServiceCard key={service.id} service={service} />
                ))}
            </div>
        </section>
    );
}

export default Services;
