import React from 'react';
import { Link, Outlet } from 'react-router-dom';


const ReactHooksComp = () => {
    return (
        <div>
            {/* <h2>THIS IS REACT HOOK COMPONENT</h2> */}
            <div className='card border-primary'>
                <div className='card-header border-primary'>
                    <Link to="usestatehook" className='btn btn-warning btn-sm m-1'>USE STATE</Link>
                    <Link to="useeffecthook" className='btn btn-warning btn-sm m-1'>USE EFFECT</Link>
                </div>
            </div>
            
            <div className='card border-primary'>
                <Outlet/>
            </div>
            
        </div>
    )
}

export default ReactHooksComp
