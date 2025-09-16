import React from 'react';
import PropTypes from 'prop-types';
import JapaneseSymbol from '../../../atoms/JapaneseSymbol';

/**
 * Layout component for Japanese calligraphy symbols
 * Renders symbols in a grid layout from top to bottom, right to left
 * 
 * @param {Object} props - Component props
 * @param {Array} props.symbols - Array of symbol objects
 * @returns {JSX.Element} Rendered Japanese layout
 */
const JapaneseLayout = ({ symbols }) => {
  if (!symbols || !symbols.length) {
    return null;
  }

  return (
    <>
      {symbols.map(symbol => (
        <JapaneseSymbol key={`symbol-${symbol.class}`} symbol={symbol} />
      ))}
    </>
  );
};

JapaneseLayout.propTypes = {
  symbols: PropTypes.arrayOf(PropTypes.shape({
    class: PropTypes.string.isRequired,
    element: PropTypes.node.isRequired
  }))
};

export default React.memo(JapaneseLayout);
