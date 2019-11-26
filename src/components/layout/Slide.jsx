import React from 'react'

const Slide = React.memo(props => {
  const { title, className, children, id, ...newProps } = props
  return (
    <div className="rs-slide">
      <div className={className} id={id}>
        {/* ID va permettre au NavBar de faire le lien avec #home, #about-me etc..}*/}
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{title}</h1>
        </header> */}

        {React.cloneElement(children, newProps)}
      </div>
    </div>
  )
})

export default Slide
