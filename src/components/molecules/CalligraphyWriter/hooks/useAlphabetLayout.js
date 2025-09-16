import { useEffect, useState } from 'react';
import { LAYOUT_CONFIG, CSS_CUSTOM_PROPERTIES } from '../constants';

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
    }

    // Update CSS custom property for row height
    const containerHeight = getComputedStyle(document.documentElement)
      .getPropertyValue(CSS_CUSTOM_PROPERTIES.CONTAINER_HEIGHT);
    
    document.documentElement.style.setProperty(
      CSS_CUSTOM_PROPERTIES.ROW_HEIGHT,
      containerHeight / alphabetRowCount
    );
  }, [alphabetRowCount, deviceInfo]);

  return { alphabetRowCount, alphabetItemWidth };
};
