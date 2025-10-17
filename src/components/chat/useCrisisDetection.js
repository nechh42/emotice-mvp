// src/components/Chat/useCrisisDetection.js
import { useState, useCallback } from 'react';
import { detectCrisis } from '../../../lib/crisisDetection';

export const useCrisisDetection = () => {
  const [currentCrisis, setCurrentCrisis] = useState(null);

  const checkForCrisis = useCallback((message) => {
    const { detectedLevel, detectedKeywords } = detectCrisis(message);
    
    if (detectedLevel !== 'none') {
      setCurrentCrisis({
        level: detectedLevel,
        keywords: detectedKeywords,
        timestamp: new Date().toISOString()
      });
      return true;
    }
    
    setCurrentCrisis(null);
    return false;
  }, []);

  const clearCrisis = useCallback(() => {
    setCurrentCrisis(null);
  }, []);

  return {
    currentCrisis,
    checkForCrisis,
    clearCrisis
  };
};