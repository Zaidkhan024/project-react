import React, { Component } from 'react'

export class ErrorBoundary extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             hasError : false
        }
    }
    
    static getDerivedStateFromError(){
        return{
            hasError : true
        }
    }

    componentDidCatch(Error){
        console.log(Error);
    }

    render() {
           if(this.state.hasError){
            return <h3>NOT A USER</h3>
           }
           return this.props.children;
    }
}

export default ErrorBoundary
