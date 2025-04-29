
import React, { Component, PureComponent } from 'react'

class MyPureComp extends PureComponent {

    render() {
        console.log("this is mypurecom");
        return (
            <div>
                <h2>This is MyPureComp</h2>
                <p>{this.props.empName}</p>
            </div>
        )
    }
}

export default MyPureComp
