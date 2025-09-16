import React from 'react';
import PropTypes from 'prop-types';
import { CSS_CLASSES } from '../constants';

/**
 * Component for rendering individual Japanese calligraphy symbols
 * 
 * @param {Object} props - Component props
 * @param {Object} props.symbol - Symbol data object
 * @param {string} props.symbol.class - Symbol class name
 * @param {React.ReactNode} props.symbol.element - Symbol element to render
 * @returns {JSX.Element} Rendered Japanese symbol
 */
const JapaneseSymbol = ({ symbol }) => {
  return (
    <div 
      key={`symbol-${symbol.class}`} 
      className={`${CSS_CLASSES.GRID_ITEM}-${symbol.class}`}
      role="img"
      aria-label={`Japanese calligraphy symbol: ${symbol.class}`}
    >
      {symbol.element}
    </div>
  );
};

JapaneseSymbol.propTypes = {
  symbol: PropTypes.shape({
    class: PropTypes.string.isRequired,
    element: PropTypes.node.isRequired
  }).isRequired
};

export default React.memo(JapaneseSymbol);
