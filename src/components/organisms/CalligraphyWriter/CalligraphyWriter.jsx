import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useAlphabetLayout } from './hooks/useAlphabetLayout';
import { CSS_CLASSES } from './constants';
import JapaneseLayout from './layouts/JapaneseLayout';
import AlphabetLayout from './layouts/AlphabetLayout';

/**
 * Main CalligraphyWriter component
 * Renders calligraphy symbols using appropriate layout strategy based on locale
 * 
 * @param {Object} props - Component props
 * @param {Array} props.symbols - Array of symbol objects to render
 * @param {string} props.className - Optional custom CSS class name
 * @param {string} props.locale - Locale ('ja' for Japanese, 'en' for English)
 * @param {string} props.deviceInfo - Device type information for responsive behavior
 * @returns {JSX.Element} Rendered calligraphy writer component
 */
const CalligraphyWriter = React.memo(({ symbols, className, locale, deviceInfo }) => {
  // Memoize unique classes to prevent unnecessary recalculations
  const uniqueClasses = useMemo(() => {
    return symbols ? [...new Set(symbols.map(x => x.class))] : [];
  }, [symbols]);

  // Use custom hook for alphabet layout calculations
  const { alphabetItemWidth } = useAlphabetLayout(locale, deviceInfo, uniqueClasses);

  // Determine container class
  const containerClass = useMemo(() => {
    if (className) return className;
    return locale === 'ja' 
      ? CSS_CLASSES.CONTAINER.KANJI 
      : CSS_CLASSES.CONTAINER.ALPHABET;
  }, [locale, className]);

  // Render appropriate layout component
  const renderLayout = () => {
    if (!symbols || !symbols.length) return null;

    if (locale === 'ja') {
      return <JapaneseLayout symbols={symbols} />;
    }

    return <AlphabetLayout symbols={symbols} alphabetItemWidth={alphabetItemWidth} />;
  };

  return (
    <div className={containerClass} role="region" aria-label="Calligraphy display">
      {renderLayout()}
    </div>
  );
});

CalligraphyWriter.propTypes = {
  symbols: PropTypes.arrayOf(PropTypes.shape({
    class: PropTypes.string.isRequired,
    weight: PropTypes.number,
    element: PropTypes.node.isRequired
  })),
  className: PropTypes.string,
  locale: PropTypes.oneOf(['ja', 'en']).isRequired,
  deviceInfo: PropTypes.string
};

CalligraphyWriter.displayName = 'CalligraphyWriter';

export default CalligraphyWriter;
