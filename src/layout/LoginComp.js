import axios from 'axios';
import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './logincomp.css'

const LoginComp = () => {

    let nav = useNavigate();
    let userRef = useRef();
    let passwordRef = useRef();

    const getUserData =()=>{
        let userid = userRef.current.value;
        let userpass = passwordRef.current.value;
        axios.get("http://localhost:8888/users").then((res)=>{
            let userData = res.data;
            const currentUser = userData.filter((val)=>{return val.uid === userid && val.upass === userpass})
        
            if(currentUser.length > 0){
                window.alert("LOGIN SUCCESSFULLY")
                sessionStorage.setItem("user",userid)
                nav("/maindashboard");
            }else{
                window.alert("WRONG CREDENTIAL INSERTED");
                userRef.current.value = ""
                passwordRef.current.value = ""
            }

        }).catch((error)=>{})
    }

    return (
        <div class = "login">
            {/* <h2>THIS IS LOGIN COMPONENT</h2> */}
            <form>
                <input type='text' name='uid' ref={userRef} placeholder='ENTER USER ID' className='form-control mb-2'/>
                
                <input type='password' name='upass' ref={passwordRef} placeholder='ENTER USER PASSWORD' className='form-control mb-2'/>
                
                <button type='button' onClick={()=>getUserData()} className='btn btn-primary'>LOGIN</button>
            </form>
        </div>
    )
}

export default LoginComp
