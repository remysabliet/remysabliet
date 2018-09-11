import React from 'react';
import Konva from 'konva';
import { scaleLinear } from 'd3-scale'
import { max } from 'd3-array'
import { select } from 'd3-selection'
import {timer} from 'd3-timer'
import {squareConf} from '../configuration/animationConf'
import '../stylesheets/canvas.css'


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
        this.animCanvas(this.props)
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
        this.animCanvas(this.props)
        //console.log('componentDidUpdate')
       
       }

       animCanvas({width,height}) {
        //console.log('createCanvas');
        let {x,vx} = this.state;
     
        const ctx = this.refs.displayCanvas.getContext('2d');
        ctx.fillRect(x,250,100, 100);

        /*const Hiddenctx = this.refs.hiddenCanvas.getContext('2d');
        Hiddenctx.fillRect(100,100, 100, 100);*/

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
     

 /*  componentDidMount() {
        this.updateCanvas();
    }
    updateCanvas() {
        const ctx = this.refs.canvas.getContext('2d');
        ctx.fillRect(0,0, 100, 100);
    }
    render() {
        console.log('passage')
        return (
            <canvas ref="canvas" width={300} height={300}/>
        );
    }*/