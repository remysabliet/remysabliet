import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import AlphabetRow from '../../../molecules/AlphabetRow';

/**
 * Layout component for alphabet calligraphy symbols
 * Renders symbols in rows from left to right, top to bottom
 * 
 * @param {Object} props - Component props
 * @param {Array} props.symbols - Array of symbol objects
 * @param {number} props.alphabetItemWidth - Base width for alphabet items
 * @returns {JSX.Element} Rendered alphabet layout
 */
const AlphabetLayout = ({ symbols, alphabetItemWidth }) => {
  // Memoize unique classes to prevent unnecessary recalculations
  const uniqueClasses = useMemo(() => {
    return symbols ? [...new Set(symbols.map(x => x.class))] : [];
  }, [symbols]);

  if (!symbols || !symbols.length) {
    return null;
  }

  return (
    <>
      {uniqueClasses.map((rowClass, index) => {
        const rowSymbols = symbols.filter(symbol => symbol.class === rowClass);
        
        return (
          <AlphabetRow
            key={`row-${rowClass}-${index}`}
            rowClass={rowClass}
            symbols={rowSymbols}
            alphabetItemWidth={alphabetItemWidth}
            index={index}
          />
        );
      })}
    </>
  );
};

AlphabetLayout.propTypes = {
  symbols: PropTypes.arrayOf(PropTypes.shape({
    class: PropTypes.string.isRequired,
    weight: PropTypes.number,
    element: PropTypes.node.isRequired
  })),
  alphabetItemWidth: PropTypes.number.isRequired
};

export default React.memo(AlphabetLayout);
