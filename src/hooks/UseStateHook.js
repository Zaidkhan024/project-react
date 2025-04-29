import React, { useState } from 'react'

const UseStateHook = () => {
    const [count,setCount] = useState(0);
    const [MyName,SetMyName] = useState("ZAID");
    const [Courses,SetCourses] = useState("HTML","CSS","BOOTSTRAP","JAVASCRIPT","NODEJS","REACT");

    const counterInc =()=>{
        setCount(count+1);
    }

    return (
        <div>
            <h2>THIS IS USE STATE COMPONENT</h2>
            <p><strong>COUNTER VALUE : {count}</strong></p>
            <button type='button' onClick={()=>counterInc()}>COUNTER +</button>
            <button type='button' onClick={()=>setCount(count+2)}>COUNTER ++</button>
            <hr/>
            <p><strong>MY NAME IS : {MyName}</strong></p>
            <button type='button' onClick={()=>SetMyName("ZAID KHAN")}>FULL-NAME</button>
            <hr/>
            {/* <p><strong>MY COURSE : {Courses}</strong></p>
            <button type='button' onClick={()=>SetCourses()}>SHOW-COURSE</button>
            <ul>
                {
                    Courses.map((course)=>{
                        return <li>{course.SetCourses}</li>
                    })
                }
            </ul> */}
            
        </div>
    )
}

export default UseStateHook
