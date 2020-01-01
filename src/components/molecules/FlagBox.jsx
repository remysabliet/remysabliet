
import React, { useState, useEffect } from 'react'

import Button from 'components/atoms/Button'
import SVGDisplayer from 'components/atoms/SVGDisplayer'
import { locales as InitConf } from 'helpers/constants/global'

const FlagBox = React.memo(props => {
  const { locale, setLocale } = props;

  const [flags, setFlags] = useState(InitConf) // initialized to Empty

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
            type="button"
            id={`${flag.locale}`}
            active={flag.active}
            onClick={setLocale}
          >
            <SVGDisplayer svg={settings[flag.locale]} />
          </Button>
        ))}
  </div>
  )
})

export default FlagBox
