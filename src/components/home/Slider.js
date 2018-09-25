import React from 'react'
import Slide from '../../layout/Slide'
import MainCanvas from '../../canvas/MainCanvas'
import { findDOMNode } from 'react-dom'
import NavBar from './NavBar'
import {timer} from 'd3-timer'
//import magicSlider from '../../utils/magicSlider'

import '../../stylesheets/slider.css'



class Slider extends React.Component {
  constructor(props){
   super(props);
   this.magicSlider=this.magicSlider.bind(this);

   this.speed=0; //We can't work with State to manage this variable, as the SLider effect algorithm is requiring a recursivity call (high speed), the update of the setState is asynchronous and  being quickly saturated (queue), it can't follow the speed of magicSlider to update state. 
  
   this.state={
    slides:['Home','aboutMe','experience','contact'],
    currentSlide:'Home',
    yBounding:0, //Initialisation position y=0
    currentPosition:0, //Current position of the frame
    ongoingtimer:false,
    viewportHeight:0
  }

  }





  componentWillMount(){
    const{history}=this.props;
    history.push('/#home')
  }

 shouldComponentUpdate(nextProps,nextState){
    //Prevent rerendering in the case of Scroll event. 
    if(nextState.yBounding!=this.state.yBounding
       // || nextState.speed!=this.state.speed
           || nextState.position!=this.state.position //=> we need to update position of the screen
             || nextState.currentSlide!=this.state.currentSlide
                || nextState.ongoingtimer!=this.state.ongoingtimer){ 
          console.log('shouldComponentUpdate: we dont update')
      return false;
    }
    console.log('shouldComponentUpdate: we  update')
      return true;
 }

componentDidMount(){
  this.setState({viewportHeight: document.documentElement.clientHeight});//Retrieve height of the viewPort
  window.addEventListener('wheel', this.handleOnWheel.bind(this),true);

  this.magicSlider();
}

componentWillUnmount(){
  window.removeEventListener('wheel',  this.handleOnWheel.bind(this),true);
 console.log('unmounted')

}

handleOnClick(e){
 console.log('handleOnClick');
}

switchSlide(direction){
  console.log('switchSlide ',direction);
  const{history}=this.props;
  //console.log(history)
 }

 magicSlider () {
  const slideChangeHardnessCoeff=0.01; //Bigger the coef is, harder it is to change of slide. norm: 0.035
  const SlideChangeSpeedCoeff = 0.8; // Speed du changement de slide   norm= 0.7
                                   //1= we keep changing slide as soon as we move the wheel
                                   // 0.3 => Harder to change of slide
  let {currentPosition,viewportHeight} = this.state;
  this.speed *=SlideChangeSpeedCoeff;

   //console.log('speed = ',this.speed,'currentPosition :', currentPosition);

  currentPosition += this.speed;
  const slideBoundary = Math.round(currentPosition);
  const dif = slideBoundary - currentPosition;

  currentPosition += dif*slideChangeHardnessCoeff;

  if(Math.abs(slideBoundary - currentPosition)<0.001) {
     //We are really close to a boundary (Previous or Next slide) so we override our currentPosition with that integer.
  currentPosition = slideBoundary;
   //console.log('We get into the (Math.abs(i - position)<0.001',slideBoundary - currentPosition)
  }
  window.scrollTo(0,currentPosition * viewportHeight);
  console.log('Move viewport position to Y= ',currentPosition * viewportHeight)

      
      
  let curSlide=this.state.slides[slideBoundary];
  //console.log("currentSlide",curSlide)

  this.setState({
    currentPosition:currentPosition,
    currentSlide:curSlide
  })

  console.log('currentSlide',this.state.currentSlide)

  //RecursivityCall loop
  window.requestAnimationFrame(this.magicSlider);
} 
/* Check whether user change of slide using Scroll */
 handleOnWheel(event){
//Corresponds to the strengh of the scroll.  higher it is, higher is our speed easier it scrolls. Smaller it is, harder it scrolls
//console.log('#######################')
//console.log('#####On Wheel Event####')
//console.log('#######################')
//console.log('SPEED AVANT',this.speed)
  this.speed += event.deltaY*0.0002  //0.0002


}

render(props){
  console.log('render')

    return(   

      <div className="slider-container" ref='test'>    
       
        <div className="foreground">                     
           <NavBar {...this.newProps} />           
        </div>            
       
        <Slide {...props} className="slide-home" id="home"  ref="slideHome" >
            <MainCanvas width={300} height={400}/>
           <a href='https://www.freepik.com/free-vector/beautiful-green-landscape-background_922670.htm'>Designed by Kjpargeter</a>
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
          <Slide {...props} className="slide-aboutMe" id="aboutMe"  ref="slideAboutMe" >    
            <MainCanvas width={300} height={400}/>
         </Slide>
         <Slide {...props} className="slide-aboutMe" id="aboutMe"  ref="slideAboutMe" >  
            <MainCanvas width={300} height={400}/>
         </Slide>
      </div>
 
    )
 }
}

export default Slider;