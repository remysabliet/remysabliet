import React from 'react';
import PropTypes from 'prop-types';
import { CSS_CLASSES } from '../organisms/CalligraphyWriter/constants';

/**
 * Component for rendering individual alphabet calligraphy symbols
 * 
 * @param {Object} props - Component props
 * @param {Object} props.symbol - Symbol data object
 * @param {string} props.symbol.class - Symbol class name
 * @param {number} props.symbol.weight - Symbol weight for width calculation
 * @param {React.ReactNode} props.symbol.element - Symbol element to render
 * @param {number} props.alphabetItemWidth - Base width for alphabet items
 * @returns {JSX.Element} Rendered alphabet symbol
 */
const AlphabetSymbol = ({ symbol, alphabetItemWidth }) => {
  const symbolWidth = symbol.weight * alphabetItemWidth;

  return (
    <div
      style={{ width: `${symbolWidth}px` }}
      className={CSS_CLASSES.ITEM}
      role="img"
      aria-label={`Alphabet calligraphy symbol: ${symbol.class}`}
    >
      {symbol.element}
    </div>
  );
};

AlphabetSymbol.propTypes = {
  symbol: PropTypes.shape({
    class: PropTypes.string.isRequired,
    weight: PropTypes.number,
    element: PropTypes.node.isRequired
  }).isRequired,
  alphabetItemWidth: PropTypes.number.isRequired
};

export default React.memo(AlphabetSymbol);
