import React, { Component } from 'react'
import HocComp from './HocComp'

class HoverCounterComp extends Component {

    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //          count : 0
    //     }
    // }

    // counterInc(){
    //     this.setState((prevState)=>({count:prevState.count+1}))
    // }

    // counterReset(){
    //     this.setState((prevState)=>({count:prevState.count=0 , status:"RESET"}))
    // }

    render() {
        return (
            <div>
                <h2>THIS IS HoverCounterComp</h2>

                {/* <p>COUNTER : <strong>{this.state.count}</strong></p>
                <h2 onMouseOver={()=>this.counterInc()}>HOVER HERE TO INCREMENT</h2> */}

                <p>COUNTER : <strong>{this.props.count}</strong></p>
                <h2 onMouseOver={()=>this.props.counterInc()}>HOVER HERE TO INCREMENT</h2>
                {/* <button type="button" onClick={()=>this.props.counterReset()}>COUNTER-RESET</button> */}

            </div>
        )
    }
}

// export default HoverCounterComp
export default HocComp(HoverCounterComp)
