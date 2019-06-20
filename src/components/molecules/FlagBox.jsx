
import React, {useState, useEffect} from 'react'

import Button from 'components/atoms/Button'
import SVGDisplayer from 'components/atoms/SVGDisplayer'
import {locales as InitConf} from 'helpers/constants/global'

const FlagBox = props => {
  const {locale, setLocale} = props;

  const [flags, setFlags] = useState(InitConf); // initialized to Empty

  useEffect(() => {
    const newFlags = flags.map( flag => 
      flag.locale === locale ? {
        locale: locale, active: true 
        } : {
        locale: flag.locale, active: false 
        } 
    )
    setFlags(newFlags)
  }, [locale]);
   
 
  let settings = {}
  flags.forEach(x => { 
    settings[`${x.locale}`]= {
      className: "icon",
      viewBox: "0 0 640 480",
      uses: [{
          id:x.locale , className:"flag", xlinkHref: `#${x.locale}Flag`
        }]
      }
  })

  return (
  <div className="flagBox">
    {flags && flags.map(flag => (
      <Button type="button" id={`${flag.locale}`} active={flag.active} onClick={setLocale}>
        <SVGDisplayer svg={settings[flag.locale]} />
      </Button>
    ))}
  </div>
  )
}

export default FlagBox
