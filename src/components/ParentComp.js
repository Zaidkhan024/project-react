import React, { Component } from "react";
import ChildComp from "./ChildComp";
import MyPureComp from "./MyPureComp";
import MempComp from "./MemoComp";

class ParentComp extends Component{ //Component is an inbuilt class of React

    constructor(){
        super();
        this.state={
            salary:150000,
            empName:"ZAID",
            cnt : true
        }
    }

    change(){
        if(this.state.cnt === true){
        this.setState({salary:200000,empName:"JUNAID"});
        this.setState({cnt:false})
        }
        else{
        this.setState({salary:150000,empName:"ZAID"});
        this.setState({cnt:true})
        }
    }

    render(){
        const {empName,salary} = this.state;
        return(
            <div> 
                <h2>THIS IS PARENT CLASS COMPONENT</h2>
                <p>EMPLOYEE : <strong>{empName}</strong></p>
                <p>SALARY : <strong>{salary}</strong></p>
                <button type="button" className="btn btn-danger" onClick={()=> this.change()}>CHANGE</button>
                <hr/>
                <ChildComp name={empName}payment={salary}/>
                <hr/>
                <MyPureComp name={empName}/>
                <hr/>
                <MempComp/>
            </div>
        )
    }
}
export default ParentComp;
