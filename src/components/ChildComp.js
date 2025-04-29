import React from "react";
//THIS COMPONENT IS CALLED IN ParentComp.js AT LINE.NO - 35
const ChildComp =(props)=> {
    // const {empName,salary} = this.state;
    return <div> 
    <h2>THIS IS CHILD COMPONENT</h2>
    <p>EMPLOYEE : <strong>{props.name}</strong></p>
    <p>SALARY : <strong>{props.payment}</strong></p>
    {/* <button type="button" className="btn btn-danger" onClick={()=> this.change()}>CHANGE</button> */}
    </div>
}
export default ChildComp;