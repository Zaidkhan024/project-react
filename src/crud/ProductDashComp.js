import axios from 'axios';
import React, { useEffect, useState } from 'react'
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { Link, Outlet } from 'react-router-dom';


const ProductDashComp = () => {
    
    const[products,setProducts] = useState([]);
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = () =>{
        axios.get("http://localhost:8888/products").then((res)=>{
            // console.log(res.data);
            setProducts(res.data);
        }).catch((error)=>{})
    }

    const deleteProduct = (id) =>{
        if(window.confirm(`ARE YOU SURE TO DELETE PRODUCT WITH ID : ${id}`)){
            axios.delete(`http://localhost:8888/products/${id}`).then(()=>{
                window.alert("PRODUCT DELETED SUCCESSFULLY")
                fetchData();
            }).catch((error)=>{})
        }
    }

    return (
        <div>
            <h2>THIS IS ProductDashComp</h2>
            <div className='card-header border-primary'>
                <Link to="/maindashboard/addd" className='btn btn-primary btn-sm m-1'>
                <AddBoxIcon></AddBoxIcon>ADD PRODUCT</Link>
                {/* <Link to="edit" className='btn btn-warning btn-sm m-1'>UPDATE PRODUCT</Link> */}
            </div>
          
            <div className='card border-primary'>
                <Outlet/>
            </div>
            <table className='table table-hover table-striped'> 
                <thead>
                    <tr>
                        <th>S.NO.</th><th>NAME</th><th>PRICE</th><th>COMPANY</th><th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((val,index)=>{
                            return <tr key={index}>
                                <td>{index+1}</td>
                                <td>{val.pname}</td>
                                <td>{val.pprice}</td>
                                <td>{val.pcompany}</td>
                                <td>
                                <Link to = {`/maindashboard/editproduct/${val.id}`} className='btn btn-success btn-sm m-1'>
                                    <BorderColorIcon></BorderColorIcon>
                                </Link>
                                    <button type='button' onClick={()=>deleteProduct(val.id)} className='btn btn-outline-danger btn-sm'>
                                        <DeleteIcon></DeleteIcon>
                                    </button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ProductDashComp
