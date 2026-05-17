import React from 'react';

export default function Billboard({ image, link, alt, position, className = 'billboard' }) {
  return (
    <div className={className} style={{
      left: `${position}%`,
      transform: `translateX(-50%)`
    }}>
      <img src={image} alt={alt} style={{ width: '100%', height: 'auto' }} />
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '45%',
          cursor: 'pointer',
          zIndex: 10
        }}
      >
      </a>
    </div>
  );
}