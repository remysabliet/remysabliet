import { useEffect, useState } from 'react';
import { LAYOUT_CONFIG, CSS_CUSTOM_PROPERTIES } from '../constants';

/**
 * Utility function to detect iOS devices
 * @returns {boolean} True if device is iOS
 */
const isIOS = () => {
  return /iPad|iPhone|iPod/.test(navigator.userAgent) || 
         (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
};

/**
 * Custom hook for managing alphabet layout calculations
 * Handles row count and item width calculations for English layout
 * 
 * @param {string} locale - Current locale ('ja' or 'en')
 * @param {string} deviceInfo - Device type information
 * @param {Array} uniqueClasses - Array of unique symbol classes
 * @returns {Object} Object containing alphabetRowCount and alphabetItemWidth
 */
export const useAlphabetLayout = (locale, deviceInfo, uniqueClasses) => {
  const [alphabetRowCount, setAlphabetRowCount] = useState(0);
  const [alphabetItemWidth, setAlphabetItemWidth] = useState(0);

  // Calculate row count for alphabet layout
  useEffect(() => {
    if (LAYOUT_CONFIG.SUPPORTED_LOCALES.includes(locale) && locale !== 'ja') {
      setAlphabetRowCount(uniqueClasses.length);
    }
  }, [locale, uniqueClasses]);

  // Calculate item width and update CSS custom properties
  useEffect(() => {
    if (alphabetRowCount === 0) return;

    const maxElementsInARow = LAYOUT_CONFIG.MOBILE_DEVICES.includes(deviceInfo) 
      ? LAYOUT_CONFIG.MAX_ELEMENTS_IN_ROW.MOBILE 
      : LAYOUT_CONFIG.MAX_ELEMENTS_IN_ROW.DESKTOP;

    const containerElement = document.querySelector('.rs-calligraphy-container');

    if (containerElement) {
      const calligraphyBoardWidth = getComputedStyle(containerElement).width;
      setAlphabetItemWidth(
        parseInt(calligraphyBoardWidth.replace('px', '')) / maxElementsInARow
      );

      // Add iOS class for specific styling
      if (isIOS()) {
        containerElement.classList.add('ios');
      } else {
        containerElement.classList.remove('ios');
      }
    }

    // Update CSS custom property for row height
    const containerHeight = getComputedStyle(document.documentElement)
      .getPropertyValue(CSS_CUSTOM_PROPERTIES.CONTAINER_HEIGHT);
    
    // Parse the height and ensure it's valid
    const parsedHeight = parseFloat(containerHeight);
    if (parsedHeight && parsedHeight > 0 && alphabetRowCount > 0) {
      // Calculate row height but ensure it's not too large
      const calculatedRowHeight = parsedHeight / alphabetRowCount;
      // Cap the row height to prevent excessive spacing
      const maxRowHeight = 80; // Maximum 80px per row
      const finalRowHeight = Math.min(calculatedRowHeight, maxRowHeight);
      
      document.documentElement.style.setProperty(
        CSS_CUSTOM_PROPERTIES.ROW_HEIGHT,
        `${finalRowHeight}px`
      );
    }
  }, [alphabetRowCount, deviceInfo]);

  return { alphabetRowCount, alphabetItemWidth };
};
