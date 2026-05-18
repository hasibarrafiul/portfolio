import React, { useEffect, useState } from 'react';
import { sprite } from '../images/imageIndex';

export default function LoadingScreen({ onDone }) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Tick progress from 0 → 100 over ~1.8s
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 36);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      // Short pause at 100%, then fade out
      const t = setTimeout(() => setFadeOut(true), 400);
      return () => clearTimeout(t);
    }
  }, [progress]);

  useEffect(() => {
    if (fadeOut) {
      // Wait for fade animation to finish, then unmount
      const t = setTimeout(onDone, 600);
      return () => clearTimeout(t);
    }
  }, [fadeOut, onDone]);

  return (
    <div className={`loading-screen ${fadeOut ? 'loading-screen--fade' : ''}`}>
      <div className="loading-content">
        <img src={sprite} alt="Character" className="loading-sprite" />
        <h1 className="loading-title">Hasib Ar Rafiul Fahim</h1>
        <p className="loading-subtitle">Software Engineer · Tokyo, Japan</p>

        <div className="loading-bar-track">
          <div
            className="loading-bar-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="loading-percent">{progress}%</p>
      </div>
    </div>
  );
}
