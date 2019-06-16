import React from 'react'

const Slide = props => {
  const { title, className, children, id, ...newProps } = props
  return (
    <div className="slide">
      <div className={className} id={id}>
        {/* ID va permettre au NavBar de faire le lien avec #home, #aboutMe etc..}*/}
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" /> 
          <h1 className="App-title">{title}</h1>
        </header> */}
        <main>
          {React.cloneElement(children, newProps)}
        </main>
      </div>
    </div>
  )
}

export default Slide
