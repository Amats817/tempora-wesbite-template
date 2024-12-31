import React from 'react';
import './tutorial.css';

const Tutorial = () => {
  return (
    <>
      <div className="tutorial">
        <h1>Showcase & Tutorial</h1>
        <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/4_UN0Rxjv-w?si=fGiUEhpZ-XjJ2jeo" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}

export default Tutorial;