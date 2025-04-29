import React, { Component } from "react";

class ConditionRenComp extends Component{

    constructor(props){
        super(props)
        this.state = {
            isCond:true
        }
    }

    render(){
        // let msg ="";
        // if(this.state.isCond){
            // return <h2>ADMIN LOGIN SUCCESSFULLY</h2>
            // msg = "ADMIN LOGIN SUCCESSFULLY";
        // }else{
            // return <h2>USER LOGIN SUCCESSFULLY</h2> 
            // msg = "USER LOGIN SUCCESSFULLY";
        // }
        // return <h2>{msg}</h2>

        // return (this.state.isCond) ? <h2>ADMIN LOGIN SUCCESSFULLY</h2> : <h2>USER LOGIN SUCCESSFULLY</h2>

        return this.state.isCond && <h2>ADMIN LOGIN SUCCESSFULLY</h2> || <h2>USER LOGIN SUCCESSFULLY</h2>

    }

}
export default ConditionRenComp