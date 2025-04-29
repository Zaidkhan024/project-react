import React, { Component } from "react";

class ClassComp extends Component{ //Component is an inbuilt class of React

    render(){
        return(
            <div> 
                <h2>THIS IS CLASS COMPONENT</h2>
                <p>MY NAME IS <strong>{this.props.fname}</strong>, I AM THE <strong>{this.props.post}</strong></p>
            </div>
        )
    }
}
export default ClassComp;