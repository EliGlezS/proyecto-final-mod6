import React, { useState, useEffect } from 'react';
import events from '../servicesEvents'; 
import "../styles/eventsComponent.css" 

const EventsComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedEvent, setExpandedEvent] = useState(null);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? events.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === events.length - 1 ? 0 : prevIndex + 1));
  };

  const handleBulletClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex + 1 >= events.length) {
          return 0; 
        } else {
          return prevIndex + 1; 
        }
      });
    }, 5000);
  
    return () => clearInterval(interval);
  }, []);

  const scrollToEvent = (id) => {
    const targetElement = document.getElementById(`event-${id}`);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="events-container">
      <h1 className="title-events-container">Próximos Eventos</h1>

      <div className="carousel-container">

        <div className="carousel-slide">
          {events.map((event, index) => (
            <div key={event.id} className={`slide ${currentIndex === index ? 'active' : ''}`}>
              <img
                src={event.image}
                alt={event.title}
                onClick={() => scrollToEvent(event.id)}
              />
            </div>
          ))}
        </div>

        <button className="prev" onClick={goToPrevious}>‹</button>
        <button className="next" onClick={goToNext}>›</button>

        <div className="carousel-bullets">
          {events.map((_, index) => (
            <span
              key={index}
              className={currentIndex === index ? 'active' : ''}
              onClick={() => handleBulletClick(index)}
            />
          ))}
        </div>

      </div>

      <div className="events-list">

        {events.map((event) => (
          <div key={event.id} id={`event-${event.id}`} className="event-item">

            <h2>{event.title}</h2>
            <p>{event.description}</p>
            <p><strong>Fecha:</strong> {event.date}</p>

            <button onClick={() => setExpandedEvent(expandedEvent === event.id ? null : event.id)}>
              {expandedEvent === event.id ? <span>Ver menos <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                </svg></span> : <span>Ver más <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg></span>}
            </button>

            {expandedEvent === event.id && (
              <div className="event-details">

                <p><strong>Ubicación:</strong> {event.location}</p>

                <table>

                  <thead>
                    <tr>
                      <th>Hora</th>
                      <th>Actividad</th>
                    </tr>
                  </thead>

                  <tbody>
                    {event.schedule.map((item, idx) => (
                      <tr key={idx}>
                        <td>{item.time}</td>
                        <td>{item.activity}</td>
                      </tr>
                    ))}
                  </tbody>

                </table>

              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsComponent;
