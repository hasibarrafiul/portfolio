import { useState, useEffect, useCallback } from 'react';
import { sprite as spriteStill, spriteRun } from '../images/imageIndex';
import {
  updateBillboardPositions,
  updateCertificatePositions,
  updateBillboardPositionsTouch,
  updateCertificatePositionsTouch,
  getSpriteMove,
  checkPageTransition,
  generateInitialBillboardPositions,
  generateInitialCertificatePositions
} from '../helpers/navigationHelpers';

export default function useGameNavigation() {
  const [spritePositionX, setSpritePositionX] = useState(50);
  const [mirror, setMirror] = useState(false);
  const [spriteImage, setSpriteImage] = useState(spriteStill);
  const [pageNumber, setPageNumber] = useState(1);
  const [prevPage, setPrevPage] = useState(0);
  const [isGamePaused, setIsGamePaused] = useState(false);

  // Billboard positions (Page 4)
  const [billboardPositions, setBillboardPositions] = useState(
    generateInitialBillboardPositions()
  );

  // Certificate positions (Page 5)
  const [certificatePositions, setCertificatePositions] = useState(
    generateInitialCertificatePositions()
  );

  // Common move handler for all input types
  const handleMove = useCallback((direction, inputType = 'keyboard') => {
    const isKeyboardOrWheel = inputType !== 'touch';
    const spriteMove = getSpriteMove(isKeyboardOrWheel, pageNumber, direction);

    setSpriteImage(spriteRun);

    // Update billboard or certificate positions
    if (pageNumber === 3 && !isGamePaused) {
      setBillboardPositions(prev => 
        isKeyboardOrWheel
          ? updateBillboardPositions(prev, direction)
          : updateBillboardPositionsTouch(prev, direction)
      );
    } else if (pageNumber === 4 && !isGamePaused) {
      setCertificatePositions(prev =>
        isKeyboardOrWheel
          ? updateCertificatePositions(prev, direction)
          : updateCertificatePositionsTouch(prev, direction)
      );
    }

    // Move sprite
    if (direction === 'right') {
      if (!isGamePaused) {
        setSpritePositionX(prev => Math.min(100, prev + spriteMove));
      }
      setMirror(false);
    } else if (direction === 'left') {
      if (!isGamePaused) {
        setSpritePositionX(prev => Math.max(0, prev - spriteMove));
      }
      setMirror(true);
    }
  }, [pageNumber, isGamePaused]);

  // Page transition effect
  useEffect(() => {
    const newPage = checkPageTransition(spritePositionX, pageNumber);
    if (newPage !== null) {
      setPrevPage(pageNumber);
      setPageNumber(newPage);
      setSpritePositionX(newPage > pageNumber ? 10 : 90);
    }
  }, [spritePositionX, pageNumber]);

  // Reset sprite image after 1 second
  useEffect(() => {
    const timer = setTimeout(() => {
      setSpriteImage(spriteStill);
    }, 1000);
    return () => clearTimeout(timer);
  }, [spriteImage]);

  return {
    // State
    spritePositionX,
    mirror,
    spriteImage,
    pageNumber,
    prevPage,
    isGamePaused,
    billboardPositions,
    certificatePositions,
    // Setters
    setPageNumber,
    setPrevPage,
    setSpritePositionX,
    setIsGamePaused,
    setSpriteImage,
    setMirror,
    // Handlers
    handleMove
  };
}