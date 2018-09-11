import React from 'react'


import Slide from '../../layout/Slide'
import MainCanvas from '../../canvas/MainCanvas'
import { findDOMNode } from 'react-dom'
import NavBar from './NavBar'

import '../../stylesheets/slider.css'
import '../../stylesheets/navbar.css'

class Slider extends React.Component {
  state={
        slides:['home','aboutMe','experience'],
        currentSlide:'home',
        yBounding:0 //Initialisation position y=0
  }

  componentWillMount(){
    const{history}=this.props;
    history.push('/#home')
  }
 shouldComponentUpdate(nextProps,nextState){
    //Prevent rerendering in the case of Scroll event. 
    if(nextState.yBounding!=this.state.yBounding){ 
      return false;
    }
      return true;
 }

componentDidMount(){
 window.addEventListener('scroll', this.handleOnScroll.bind(this),true);
 const {history} =this.props;

}

componentWillUnmount(){
 window.removeListener('scroll',  this.handleOnScroll.bind(this),true);
 console.log('unmounted')

}

handleOnClick(e){
 console.log('handleOnClick');
}

 switchSlide(direction){
  console.log('switchSlide ',direction);
  const{history}=this.props;
  console.log(history)

 }
/* Check whether user change of slide using Scroll */
handleOnScroll(event){
// console.log('event.srcElement.scrollingElement.scrollTop',event.srcElement.scrollingElement.scrollTop)//Retrieve Y axis position of document
  const yBounding=this.state.bouding;
  const yOffset = event.srcElement.scrollingElement.scrollTop;
  const direction = yOffset > this.state.yBounding ? 'down' : 'up';
  this.setState({'yBounding': yOffset});
  this.switchSlide(direction)
}

render(props){
//onClick={this.handleOnClick.bind(this)}
/*  
 <div className="navigation-ui>">
           <NavBar {...this.newProps} />
 </div>   
*/

console.log('Slider',this.props)
    return(   
      <div className="slider-container" ref='test'>

        <div className="foreground">
            <div className="navigation-ui">
            <NavBar {...this.newProps} /></div>
           
      </div> 
        <Slide {...props} className="slide-home" id="home"  ref="slideHome" >
            <MainCanvas width={300} height={400}/>
        </Slide>

     
        <Slide {...props} className="slide-aboutMe" id="aboutMe"  ref="slideAboutMe" >
            <p> This is a short story about me</p>
            <p> This is a long story or a short story about me</p>
            <p> 
            This is a long story or a short story about me
            This is a long story or a short story about me
            This is a long story or a short story about me
            This is a long story or a short story about me
            This is a long story or a short story about me
            This is a long story or a short story about me
            </p>
            <MainCanvas width={300} height={400}/>
         </Slide>
        
      </div>

 
    )
 }
}

export default Slider;