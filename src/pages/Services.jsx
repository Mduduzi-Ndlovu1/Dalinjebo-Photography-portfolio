import React from 'react';
import "../pages/services.module.css"; // Ensure you create this CSS module for styling

const services = [
  {
    id: 1,
    title: "Portrait Photography",
    description: "Capture your best moments with professionally crafted portraits that reflect your personality and style.",
    image: "/assets/images/Self Protrait/Person One/p2.jpeg", // Replace with actual image path
  },
  {
    id: 2,
    title: "Fashion Photography",
    description: "Showcase the latest trends and styles with high-fashion photography that highlights your fashion sense.",
    image: "/assets/images/Fashion/Ancients/A5.jpeg", // Replace with actual image path
  },
  {
    id: 3,
    title: "Product Photography",
    description: "Make your products stand out with clear and captivating images that draw attention and boost sales.",
    image: "/assets/images/Product Brand/Kallahari/k7.jpeg", // Replace with actual image path
  },
  {
    id: 4,
    title: "Wedding Photography",
    description: "Preserve the magic of your special day with timeless wedding photography that captures every detail and emotion.",
    image: "public/assets/images/Wedding/White Wedding Two/w2_5.jpeg", // Replace with actual image path
  },
];

const Services = () => {
  return (
    <div className="section__header mt-6 p-8">
      <h1 className="">
       ~ Our Photography Services ~
      </h1>
      <div className="services-container mt-8">
        {services.map(service => (
          <div key={service.id} className="service-card">
            <img src={service.image} alt={service.title} className="service-image h-[500px] w-full sm:h-[250px]" />
            <div className="service-content">
              <h2 className="service-title">{service.title}</h2>
              <p className="service-description">{service.description}</p>
              <button className="btn btn--primary">Learn More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
