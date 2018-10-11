import React from 'react'
import ShadowDOM from 'react-shadow'
import logo from '../logo.svg'; //temp
import slideCSS from '../stylesheets/slide.css'


class Slide extends React.Component {
  
  render() {
  const {className,children,id, ...newProps} = this.props;

   return (
      <ShadowDOM>
        <div className="ReactShadowRoot" >
          <style dangerouslySetInnerHTML={{__html:slideCSS}} />
          <div className={className} id={id} > {/* id va permettre au NavBar de faire le lien avec #home, #aboutMe etc..*/ }
            <header className="App-header">
             <img src={logo} className="App-logo" alt="logo" />
             <h1 className="App-title">Welcome to React</h1>
            </header>
            <main {...this.newProps} >{children}</main>
          </div>
        </div>
      </ShadowDOM>
    );
  }
}

export default Slide;

