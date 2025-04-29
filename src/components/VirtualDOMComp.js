import React, { Component } from "react";

class VirtualDOMComp extends Component{ 

    constructor(props){
        super(props)

        this.state = {
            breakfast : [
                {id:1,name:"POHA"},
                {id:2,name:"IDLI"},
                {id:3,name:"SAMOSA"},
                {id:4,name:"KACHORI"},
                {id:5,name:"PARATHA"}
            ]
        }
    }

    render(){
        const{breakfast} = this.state;
        return(
            <div> 
                <h2>THIS IS VirtualDOMComp COMPONENT</h2>
                <ul>
                    {
                    breakfast.map((val,index)=>{
                        return <li key={index}>{val.name}</li>
                    })
                    }
                </ul>
            </div>
        )
    }
}
export default VirtualDOMComp;