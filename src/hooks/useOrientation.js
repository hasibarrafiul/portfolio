import { useState, useEffect } from 'react';

export default function useOrientation() {
  const [isPortrait, setIsPortrait] = useState(
    window.innerHeight > window.innerWidth
  );
  const [dialogOpen, setDialogOpen] = useState(isPortrait);

  useEffect(() => {
    const handleOrientationChange = () => {
      const portrait = window.innerHeight > window.innerWidth;
      setIsPortrait(portrait);
      setDialogOpen(portrait);
    };

    window.addEventListener('resize', handleOrientationChange);
    return () => window.removeEventListener('resize', handleOrientationChange);
  }, []);

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  return {
    isPortrait,
    dialogOpen,
    handleDialogClose
  };
}