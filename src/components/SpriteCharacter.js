import React from 'react';

export default function SpriteCharacter({ spriteImage, positionX, mirror }) {
  return (
    <img
      src={spriteImage}
      alt="Sprite"
      className="sprite"
      style={{
        left: `${positionX}%`,
        transform: `translateX(-50%) scaleX(${mirror ? '-1' : '1'})`
      }}
    />
  );
}