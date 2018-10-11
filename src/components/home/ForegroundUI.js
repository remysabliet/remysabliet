import React from 'react'
import ShadowDOM from 'react-shadow'
import foregroundUICSS from '../../stylesheets/foregroundui.css'
import NavBar from './NavBar'

const ForegroundUI = (props)=> {

    return (   
        <ShadowDOM>
             <div className="ReactShadowRoot" >
                 <style dangerouslySetInnerHTML={{__html:foregroundUICSS}}/>              
                    <NavBar {...this.newProps} />           
                </div>   
        </ShadowDOM>
    )

}

export default ForegroundUI;