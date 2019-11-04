import React from 'react'

const CalligraphyWriter = React.memo((props) => {
  const { symbols, className} = props;

  const classes = className? className : "calligraphy-grid-container";
  return (
    <div className={classes}>
      { symbols && symbols.length ? 
      symbols.map( symbol => 
        <div className={`grid-item-${symbol['class']}`}>
          {symbol['element']}
        </div>
      ) : null }
    </div>
  )
})

export default CalligraphyWriter;
