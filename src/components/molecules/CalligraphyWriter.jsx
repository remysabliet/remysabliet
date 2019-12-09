import React, { useEffect, useState } from 'react'

const CalligraphyWriter = React.memo((props) => {
  const { symbols, className, locale, deviceInfo } = props;

  // We have two kind of boards, JA where we write from top to bottom right to left
  // And the other (Alphabet) left to right, top to bottom
  const classes = className ? className : locale === 'ja' ? `rs-calligraphy-container-kanji` : 'rs-calligraphy-container-alphabet'

  // For alphabet board, number of rows to display
  const [alphabetRowCount, setAlphabetRowCount] = useState(0);

  // With for an alphabet Item
  const [alphabetItemWidth, setAlphabetItemWidth] = useState(0);

  /** This hooks is used in Alphabet language only
   * We write from left to right, top to bottom which make
   * use use a FlexBox to build-up SVG one after the others in a same row
   */
  useEffect(() => {
    if (['en'].includes(locale)) {
      // We count the number of rows
      setAlphabetRowCount([...new Set(symbols.map(x => x.class))].length);
    }

  }, symbols)

  /** This hooks is used in Alphabet language only
  * Update dynamically the size of an item in CSS based on the number of rows
  */
  useEffect(() => {
    // Phones width being much smaller than screen, SVG size ends to be much as well
    // We must afford smaller MaxElement to phones so that width is getting larger
    const maxElementsiInARow = ["android", "ios"].includes(deviceInfo) ? 30 : 40;

    // Width of an alphabet element based on a pre-defined maxElementsiInARow
    const containerElement = document.querySelector('.rs-calligraphy-container');

    if (containerElement) {
      const calliGraphyBoardWidth = getComputedStyle(containerElement).width;
      setAlphabetItemWidth(parseInt(calliGraphyBoardWidth.replace('px', '')) / maxElementsiInARow);
    }

    // Height of an alphabet row
    const containerHeight = getComputedStyle(document.documentElement).getPropertyValue('--calligraphy-container-height')
    document.documentElement.style.setProperty('--calligraphy-row-height', containerHeight / alphabetRowCount)
  }, [alphabetRowCount])

  return (
    <div className={classes}>
      {symbols && symbols.length ? (
        locale === 'ja' ?
          symbols.map(symbol =>
            <div className={`grid-item-${symbol['class']}`}>
              {symbol['element']}
            </div>
          ) :
          [...new Set(symbols.map(x => x.class))]
            .map(row => {
              return (
                <div className="rs-calligraphy-container-en-row"> {symbols.filter(symb => symb.class === row)
                  .map(elem => <div style={{ width: `${elem['weight'] * alphabetItemWidth}px` }} className="rs-calligraphy-item">
                    {elem['element']}
                  </div>)}
                </div>)
            })) : null
      } </div>
  )
})

export default CalligraphyWriter;
