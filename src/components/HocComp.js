import React, { Component } from 'react'

const HocComp = (WrapperComp) => {
    
    class Hoc extends Component{
        
        constructor(props) {
            super(props)
        
            this.state = {
                count : 0
            }
        }
    
        counterInc(){
            this.setState((prevState)=>({count:prevState.count+1 , status:"INCREMENT"}))
        }

        render(){
            return <WrapperComp count={this.state.count} counterInc={()=>this.counterInc()}></WrapperComp>
        }

    }
    
    return Hoc;
}

export default HocComp
