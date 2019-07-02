import React from 'react'

const CalligraphyWriter = (props) => {
  const { symbols, className} = props;

  const classes = className? className : "calligraphy-grid-container";
  //console.log(symbols)
  return (
    <div className={classes}>
      {symbols.map( symbol => 
        <div className={`grid-item-${symbol['class']}`}>
          {symbol['element']}
        </div>
      )}
    </div>
  )
}

export default CalligraphyWriter;
