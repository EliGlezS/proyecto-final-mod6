import React, { useState, useEffect } from 'react';
import events from '../servicesEvents'; 
import "../styles/eventsComponent.css" 


const EventsComponent = () => {
    // Inicializamos el índice actual del carrusel
    const [currentIndex, setCurrentIndex] = useState(0);
  
    // Función para ir al slider anterior (izquierda)
    const goToPrevious = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? events.length - 1 : prevIndex - 1));
    };
  
    // Función para ir al slider siguiente (derecha)
    const goToNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex === events.length - 1 ? 0 : prevIndex + 1));
    };
  
    // Función para cambiar la imagen al hacer clic en el bullet
    const handleBulletClick = (index) => {
      setCurrentIndex(index);
    };
  
    // Manejo del carrusel automático
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length); // Avanza automáticamente cada 5 segundos
      }, 5000); // 5000 ms = 5 segundos
  
      return () => clearInterval(interval); // Limpiar el intervalo cuando el componente se desmonte
    }, []); // Solo ejecuta esto una vez al cargar el componente
  
    return (
      <div className="carousel-container">
        <div className="carousel-slide">
          {/* Mapeamos los eventos y mostramos la imagen correspondiente */}
          {events.map((event, index) => (
            <div key={event.id} className={`slide ${currentIndex === index ? 'active' : ''}`}>
              <img
                src={event.image}
                alt={event.title}
                onClick={() => alert(`Redirigiendo al evento: ${event.title}`)} // Redirigir al evento
              />
            </div>
          ))}
        </div>
  
        {/* Flechas de navegación */}
        <button className="prev" onClick={goToPrevious}>‹</button>
        <button className="next" onClick={goToNext}>›</button>
  
        {/* Bullets de navegación */}
        <div className="carousel-bullets">
          {events.map((_, index) => (
            <span
              key={index}
              className={currentIndex === index ? 'active' : ''}
              onClick={() => handleBulletClick(index)} // Al hacer clic en un bullet, cambia la imagen
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default EventsComponent;