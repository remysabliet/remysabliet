import React from 'react';
import PropTypes from 'prop-types';
import { CSS_CLASSES } from '../organisms/CalligraphyWriter/constants';
import AlphabetSymbol from '../atoms/AlphabetSymbol';

/**
 * Component for rendering a row of alphabet calligraphy symbols
 * 
 * @param {Object} props - Component props
 * @param {string} props.rowClass - Class name for the row
 * @param {Array} props.symbols - Array of symbols in this row
 * @param {number} props.alphabetItemWidth - Base width for alphabet items
 * @param {number} props.index - Row index for unique key generation
 * @returns {JSX.Element} Rendered alphabet row
 */
const AlphabetRow = ({ rowClass, symbols, alphabetItemWidth, index }) => {
  return (
    <div 
      key={`row-${rowClass}-${index}`} 
      className={CSS_CLASSES.ROW}
      role="row"
      aria-label={`Calligraphy row: ${rowClass}`}
    >
      {symbols.map((symbol, symbolIndex) => (
        <AlphabetSymbol
          key={`${rowClass}-${symbolIndex}-${JSON.stringify(symbol)}`}
          symbol={symbol}
          alphabetItemWidth={alphabetItemWidth}
        />
      ))}
    </div>
  );
};

AlphabetRow.propTypes = {
  rowClass: PropTypes.string.isRequired,
  symbols: PropTypes.arrayOf(PropTypes.shape({
    class: PropTypes.string.isRequired,
    weight: PropTypes.number,
    element: PropTypes.node.isRequired
  })).isRequired,
  alphabetItemWidth: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired
};

export default React.memo(AlphabetRow);
