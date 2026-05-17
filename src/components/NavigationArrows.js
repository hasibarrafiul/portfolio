import React from 'react';
import { gate, swipeRight, swipeLeft } from '../images/imageIndex';

export default function NavigationArrows({ onSwipeRight, onSwipeLeft }) {
  return (
    <>
      <img src={gate} alt="Gate" className="gate" />
      <img
        src={swipeRight}
        alt="SwipeRight"
        className="gate"
        onClick={onSwipeRight}
      />
      <img src={gate} alt="Gate2" className="gate2" />
      <img
        src={swipeLeft}
        alt="SwipeLeft"
        className="gate2"
        onClick={onSwipeLeft}
      />
    </>
  );
}