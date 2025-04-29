import React from "react";
import './external.css'; //importing external css file
import mycss from './mycss.module.css';

const CssComp =(props)=> {

    let square = {
        height : "100px",
        width : "100px",
        border : "2px solid blue",
        backgroundColor : "Pink",
    }

    let circle = {
        height : !true? "50px" : "100px", // "!" is used for not equal to 
        width : !true? "50px" : "100px",
        borderRadius : true? "50%" : "20%",
        border : "2px solid blue",
        backgroundColor : !false?"Pink":"black"
    }

    return <div> 
        {/* use of internal css */}
        <h2 style={{color:"greenyellow",backgroundColor:"red"}}>THIS IS CSS COMPONENT</h2>
        <div style={square}></div>
        <div style={circle}></div>

        {/* use of module css */}
        <div className={mycss.special}>EXTERNAL-CSS</div>

        {/* use of external css */}
        <h2 className="txtPrimary">MADHYA PRADESH</h2>
        <h2 className="txtDanger">BHARAT</h2>
    </div>
}
export default CssComp;