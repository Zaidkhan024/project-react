import React from 'react'
import { Outlet } from 'react-router-dom'
import NavComp from '../layout/NavComp'
import FooterComp from '../layout/FooterComp'

const MainDashboardComp = () => {
    return (
        <div className='container mt-5'>
            {/* <h2>THIS IS MAIN DASHBOARD COMPONENT</h2> */}

            <div className='card border-success'>
                <div className='card-header border-success'>
                    {/* THIS IS CARD HEADER */}
                    <NavComp/>
                </div>
                <div className='card-body border-success'>
                    {/* THIS IS CARD BODY */}
                    <Outlet/>    
                </div>
                <div className='card-footer border-success'>
                    {/* THIS IS CARD FOOTER */}
                    <FooterComp/>
                </div>
            </div>

            
        </div>
    )
}

export default MainDashboardComp
