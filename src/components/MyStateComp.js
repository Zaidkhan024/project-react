import React, { Component } from "react";

class MyStateComp extends Component{ //Component is an inbuilt class of React

    constructor(){
        super();
        this.state={
            salary:150000,
            empName:"SHIZUKA"
        }
        setTimeout(()=>{
            
            this.setState({empName:"SHINCHAN NOHARA",salary:this.state.salary+30000});

            this.setState((prevState)=>({empName:"SHINCHAN NOHARA",salary:prevState.salary+5000}));

        },2000) //THIS EXECUTES AFTER 2000 MILISECONDS 
    }

    render(){
        return(
            <div> 
                <h2>THIS IS MYSTATECOMP</h2>
                <p>EMPLOYEE : <strong>{this.state.empName}</strong></p>
                <p>SALARY : <strong>{this.state.salary}</strong></p>
                {/* <p>MY NAME IS <strong>{this.props.fname}</strong>, I AM THE <strong>{this.props.post}</strong></p> */}
            </div>
        )
    }
}
export default MyStateComp;