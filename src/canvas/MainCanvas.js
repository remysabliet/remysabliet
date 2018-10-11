import React from 'react';
import Konva from 'konva';
import { scaleLinear } from 'd3-scale'
import { max } from 'd3-array'
import { select } from 'd3-selection'
import {timer} from 'd3-timer'
import {squareConf} from '../configuration/animationConf'
//import '../stylesheets/canvas.css'


//We leverage the lifecycle of a React.Component
class MainCanvas extends React.Component {
    constructor(){
          super();
       this.state = { 
           'x':0,
           'vx':0,
       }
    }
    componentDidMount() {
        this.animCanvas()
        this.timer= timer((elapsed) => { 
            if(elapsed>2000) {  //Give a timer of 5000 ms for my animation to avoid computer's overheat
                this.timer.stop();
                console.log('Timer Elapsed')
        } 
        this.animateShape()})
    }
 
    componentWillUnmount(){
       this.timer.stop();

    }
       //When component mount, we initiate our canvas and start the loop using d3.timer
    componentDidUpdate() {
        this.animCanvas()
    }

    animCanvas() {
        let {x,vx} = this.state;
     
        const ctx = this.refs.displayCanvas.getContext('2d');
        ctx.fillRect(x,250,100, 100);
    }

    animateShape(){
      
           //console.log(squareConf)
           //console.log('hello',squareConf['MAX_AMPL']);
        let {x,vx} = this.state;
        if (x > squareConf['MAX_AMPL']){
                vx= -vx * -0.87 //We inverse the direction if we reach the max
        }
        this.setState({
            'x': x + vx,
            'vx': vx +0.3
        });
    }

    render() {
        const {width,height}=this.props
        //console.log(width, height)
        return (<React.Fragment>
                   <canvas ref="displayCanvas" width={width} height={height} />
                </React.Fragment>)
    }

}
export default MainCanvas;
