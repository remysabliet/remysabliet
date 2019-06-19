
import React, {useState} from 'react'

import Button from 'components/atoms/Button'
import SVGDisplayer from 'components/atoms/SVGDisplayer'

const FlagBox = ({flags}) => {

  let settings = {}
  flags.forEach(x =>  { 
    settings[`${x.lang}`]= {
      className: "icon",
      viewBox: "0 0 640 480",
      uses: [{
          className:"flag", xlinkHref: `#${x.lang}Flag`
        }]
      }
  })

  const [active, setActive] = useState(false); // initialized to Empty

  return (
  <div className="flagBox">
    {flags.map(flag => (
      <Button type="button" active={active} onClick={({})=>setActive(!active)} >
        <SVGDisplayer svg={settings[flag.lang]} />
      </Button>
    ))}
  </div>
  )
}

export default FlagBox
