import React, { Component } from "react";

class CounterComp extends Component{ //Component is an inbuilt class of React

    constructor(){
        super();
        this.state = {
            count : 0
        }
    }

    counterInc(){
        this.setState((prevState)=>({count:prevState.count+1 , status:"INCREMENT"}))
    }
    counterDec(){
        this.setState((prevState)=>({count:prevState.count-1 , status:"DECREMENT"}))
    }
    counterReset(){
        this.setState((prevState)=>({count:prevState.count=0 , status:"RESET"}))
    }

    help(){
        window.alert('HOW CAN I HELP YOU..??')
    }

    render(){
        const {status,count} = this.state; //DESTRUCTURING OF STATE
        const {Institute,Address} = this.props; //DESTRUCTURING OF PROPS
        return(
            <div>

                <h2>THIS IS COMPONENTCLASS COMPONENT</h2>
                {/* ACCESSING STATE DATA */}
                {/* <p>COUNTER STATUS : <strong>{this.state.status}</strong></p> */}
                <p>COUNTER STATUS : <strong>{status}</strong></p>
                {/* <p>COUNTER VALUE IS : <strong>{this.state.count}</strong></p> */}
                <p>COUNTER VALUE IS : <strong>{count}</strong></p>
                <button type="button" onClick={()=>this.counterInc()}>COUNTER++</button>
                <button type="button" onClick={()=>this.counterDec()}>COUNTER--</button>
                <button type="button" onClick={()=>this.counterReset()}>COUNTER-RESET</button>

                {/* ACCESSING PROPS DATA */}
                <hr/>
                <p>My Institute : <strong>{Institute},</strong> Address : <strong>{Address}</strong></p>
                <hr/>
                
                <button type="button" onClick={()=>this.help()}>MADAT KE LIYE BUTTON DABA RE..</button>

            </div>
        )
    }
}
export default CounterComp;