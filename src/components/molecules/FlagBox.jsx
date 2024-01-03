
import React, { useState, useEffect } from 'react'
import Button from 'components/atoms/Button'
import SVGDisplayer from 'components/atoms/SVGDisplayer'
import { locales as InitConf } from 'helpers/constants/global'

const FlagBox = React.memo(props => {
  const { locale, setLocale, deviceInfo } = props;

  const [flags, setFlags] = useState(InitConf) // initialized to Empty
  /**
   * set flags as active or not for specific display on screen
   */
  useEffect(() => {
    const newFlags = flags.map(flag =>
      flag.locale === locale
        ? {
          locale, active: true
        }
        : {
          locale: flag.locale, active: false
        }
    )
    setFlags(newFlags)
  }, [locale])

  /** 
   * As a workaround for touchstart event not being dispatched anymore in order to deactivate IOS Scrolling
   * we must create a specific touchend event for any button/actions element on the page having an interaction with user 
   * the reason we use touchend and not touchstart is that IOS prevent use of new windows from touchstart event, but not from touchend
   */
  useEffect(() => {
    if (['android', 'ios'].includes(deviceInfo)) {
      flags.forEach(flag => {
        const elem = document.querySelector(`#${flag.locale}`)
        if (elem)
          elem.addEventListener("touchend", event => setLocale(event), { passive: false });
      })
    }

    return flags.forEach(flag => {
      const elem = document.querySelector(`#${flag.locale}`)
      if (elem)
        elem.removeEventListener("touchend", event => setLocale(event), { passive: false });
    })
  }, [flags])

  // FireFox catch the <svg> element as target of the onClick event whereas other browser catch the <use> element
  // As an ID should be unique, we must assign specific ID to both svg and use tags but still must be able
  // to figure out which language has been selected.
  // Hence, we will concatenate the language as the last charaters of the ID
  const settings = {}
  flags.forEach(x => {
    settings[`${x.locale}`] = {
      className: 'icon',
      viewBox: '0 0 640 480',
      id: `svg-locale-${x.locale}`,
      uses: [
        {
          id: `use-locale-${x.locale}`, className: "flag", xlinkHref: `#${x.locale}Flag`
        }
      ]
    }
  })

  return (
    <div className="rs-flag-box">
      {flags &&
        flags.map(flag => (
          <Button
            key={`flag-${flag.locale}`}
            type="button"
            id={`${flag.locale}`}
            active={flag.active}
            onClick={setLocale}
          >
            <SVGDisplayer svg={settings[flag.locale]} />
          </Button>
        ))}
    </div >
  )
})

export default FlagBox
