import React from "react";
import dosa from '../shared/images/dosa.jpg'
import samosa from '../shared/images/samosa.jpg'
import vadapav from '../shared/images/vadapav.jpg'
import commonImg from "../shared/constant/constantdata";

const MultimediaComp =()=> {
    return(
        <div>
            <h2>MultimediaComp</h2>
            <img src={commonImg.dosa} alt='' width="200px" height="100px"/>
            <img src={commonImg.samosa} alt='' width="200px" height="100px"/>
            <img src={commonImg.vadapav} alt='' width="200px" height="100px"/>
            <img src={commonImg.sad} alt='' width="200px" height="100px"/>
            <img src={commonImg.whatsapp} alt='' width="200px" height="100px"/>
            <img src={commonImg.happy} alt='' width="200px" height="100px"/>
            <hr/>
            <video src={commonImg.vdo} controls height="300px"> </video>
            <hr/>
            <audio src={commonImg.ado} controls></audio>
        </div>
    )
}
export default MultimediaComp