import React from 'react';

export default function DirectionSign({ direction, pageName }) {
  const isLeft = direction === 'left';
  return (
    <div className={`dir-sign ${isLeft ? 'dir-sign-left' : 'dir-sign-right'}`}>
      <div className="dir-sign-board">
        {isLeft && <span className="dir-sign-arrow">◀</span>}
        <span className="dir-sign-label">{pageName}</span>
        {!isLeft && <span className="dir-sign-arrow">▶</span>}
      </div>
      <div className="dir-sign-post" />
    </div>
  );
}
