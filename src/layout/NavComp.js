import React from 'react'
import { Link } from 'react-router-dom'

const NavComp = () => {
    return (
        <div>
            {/* <h1>THIS IS NAV COMPONENT</h1> */}
            <Link to="/maindashboard" className='btn btn-primary btn-sm m-1'>HOME</Link>
            <Link to="parent" className='btn btn-danger btn-sm m-1'>PARENT</Link>
            <Link to="multimedia" className='btn btn-success btn-sm m-1'>MULTIMEDIA</Link>
            <Link to="counter" className='btn btn-secondary btn-sm m-1'>COUNTER</Link>
            <Link to="css" className='btn btn-dark btn-sm m-1'>CSS</Link>
            <Link to="reacthooks" className='btn btn-info btn-sm m-1'>REACTHOOK</Link>
            <Link to="formval" className='btn btn-warning btn-sm m-1'>FORM-VAL</Link>
            <Link to="crud" className='btn btn-primary btn-sm m-1'>CRUD</Link>
        </div>
    )
}

export default NavComp
