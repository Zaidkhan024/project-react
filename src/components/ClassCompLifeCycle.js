import React, { Component } from 'react'

export class ClassCompLifeCycle extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             color : "RED"
        }
    }
    
    //1st METHOD
    // static getDerivedStateFromProps(props){
    //     return{
    //         color:props.myColor
    //     }
    // }

    //2nd METHOD
    // componentDidMount(){
    //     setTimeout(()=>{
    //         this.setState({color : "YELLOW"})
    //     },1000)
    // }

    shouldComponentUpdate(){
        return true; //if we false it the text wont be change
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        document.getElementById("beforeUpdate").innerHTML=`MY FAVOURITE COLOUR BEFORE UPDATE WAS : ${prevState.color}`;
    }

    changeColour =()=>{
        this.setState({color:"BLUE"});
    }

    componentDidUpdate(){
        document.getElementById("afterUpdate").innerHTML=`MY FAVOURITE COLOUR BEFORE AFTER WAS : ${this.state.color}`;
    }


    render() {
        return (
            <div>
                <p>TEXT COLOR IS <strong>{this.state.color}</strong></p>
                <div id='beforeUpdate'></div>
                <div id='afterUpdate'></div>
                <button type='button' onClick={()=>this.changeColour()} className='btn btn-success'>CHANGE COLOUR</button>
            </div>
        )
    }
}

export default ClassCompLifeCycle
