import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddProductComp = () => {

    const nav = useNavigate();
    const [product,setProduct] = useState ({
        // "id": "101",
        "pname": "",
        "pprice": "",
        "pcompany": ""
    })

    const inputChangeHandler = (event) =>{
        const {type,name,value} = event.target;
        setProduct({...product,[name]:value});
    }

    const addProduct =(event)=>{
        event.preventDefault();
        // console.log(product);
        axios.post(`http://localhost:8888/products`,product).then(()=>{
            window.alert("PRODUCT ADDED SUCCESSFULLY")
            nav("/maindashboard/crud")
        }).catch((error)=>{})
    }

    return (
        <div>
            <h2>THIS IS AddProductComp</h2>
            <form onSubmit={addProduct} style={{width:"300px"}}>
                <div>
                    <input type='text' name='pname' placeholder='ENTER PRODUCT NAME' className='form-control' onChange={inputChangeHandler} value={product.pname}/>
                </div>
                <br/>
                <div>
                    <input type='text' name='pprice' placeholder='ENTER PRODUCT PRICE' className='form-control' onChange={inputChangeHandler} value={product.pprice}/>
                </div>
                <br/>
                <div>
                    <input type='text' name='pcompany' placeholder='ENTER COMPANY NAME' className='form-control' onChange={inputChangeHandler} value={product.pcompany}/>
                </div>
                <br/>
                <button type='' onClick={addProduct} className='btn btn-primary'>SUBMIT</button>
            </form>
        </div>
    )
}

export default AddProductComp
