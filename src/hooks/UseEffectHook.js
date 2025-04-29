import React, { useEffect, useState } from 'react'

const UseEffectHook = () => {
    const [count,setCount] = useState(0);
    const [age,setAge] = useState(18);

    // CASE:1
    // useEffect(()=>{
    //     setCount(count+1);
    // });
    // CASE:2
    // useEffect(()=>{
    //     setCount(count+1);
    // },[]);
    // CASE:3
    useEffect(()=>{
        setCount(count+1);
    },[age]);


    return (
        <div>
            <h2>THIS IS USE EFFECT COMPONENT</h2>
            <p>Count : <strong>{count}</strong></p>
            <p>Age : <strong>{age}</strong></p>
            <button type='button' onClick={()=>setAge(age+1)}>AGE</button>
        </div>
    )
}

export default UseEffectHook
