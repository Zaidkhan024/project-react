import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const ProtectedRoutComp = ({Component}) => {
    const nav = useNavigate();

    useEffect(()=>{
        if(!sessionStorage.getItem("user")){
            nav("/login");
        }
    },[])

    return (
        <div>
            <Component/>
        </div>
    )
}

export default ProtectedRoutComp
