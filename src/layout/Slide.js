import React from 'react'
import logo from '../logo.svg'; //temp
import slideCSS from '../stylesheets/slide.css'


class Slide extends React.Component {
  
  render() {
  const {className,children,id, ...newProps} = this.props;

   return (
     
          <div className={className} id={id} > {/* id va permettre au NavBar de faire le lien avec #home, #aboutMe etc..*/ }
            <header className="App-header">
             <img src={logo} className="App-logo" alt="logo" />
             <h1 className="App-title">Welcome to React</h1>
            </header>
            <main {...this.newProps} >{children}</main>
          </div>
    );
  }
}

export default Slide;

