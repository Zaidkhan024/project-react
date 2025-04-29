import React, { Component } from "react";
import HocComp from "./HocComp";

class ClickCounterComp extends Component{ //Component is an inbuilt class of React
    
    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //          count : 0
    //     }
    // }

    // counterInc(){
    //     this.setState((prevState)=>({count:prevState.count+1 , status:"INCREMENT"}))
    // }
    // counterDec(){
    //     this.setState((prevState)=>({count:prevState.count-1 , status:"DECREMENT"}))
    // }
    // counterReset(){
    //     this.setState((prevState)=>({count:prevState.count=0 , status:"RESET"}))
    // }
    
    render(){ 
        return(
            <div>

                <h2>THIS IS CLICKCOUNTER COMPONENT</h2>
                {/* <p>COUNTER STATUS : <strong>{status}</strong></p> */}
                {/* <p>COUNTER VALUE IS : <strong>{count}</strong></p> */}
                <p>COUNTER VALUE IS : <strong>{this.props.count}</strong></p>
                {/* <button type="button" onClick={()=>this.counterInc()}>COUNTER++</button> */}
                <button type="button" onClick={()=>this.props.counterInc()}>COUNTER++</button>
                {/* <button type="button" onClick={()=>this.props.counterDec()}>COUNTER--</button>
                <button type="button" onClick={()=>this.props.counterReset()}>COUNTER-RESET</button> */}

            </div>
        )
    }
}
// export default ClickCounterComp;
export default HocComp(ClickCounterComp);