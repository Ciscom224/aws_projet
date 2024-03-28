import { useState, useEffect } from 'react';

const HeighPage = () => {
  const [distanceFromBottom, setDistanceFromBottom] = useState(10); 

  useEffect(() => {
    const handleResize = () => {
      const windowHeight = window.innerHeight;
      const distance = windowHeight * 0.1; 
      setDistanceFromBottom(distance);
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return distanceFromBottom
    
};

export default HeighPage;