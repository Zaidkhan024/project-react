import axios from 'axios';
import React, { useEffect,useState } from 'react';
import { useNavigate,useParams } from 'react-router-dom';

const EditProductComp = () => {

    const nav = useNavigate();
    const {id} = useParams();
    const [product,setProduct] = useState ({
        "id": "",
        "pname": "",
        "pprice": "",
        "pcompany": ""
    })
    
    useEffect(()=>{
        axios.get(`http://localhost:8888/products/${id}`).then((res)=>{
            // console.log(res.data);
            setProduct(res.data);
        }).catch((error)=>{})
    },[]);
    
    const inputChangeHandler = (event) =>{
        const {type,name,value} = event.target;
        setProduct({...product,[name]:value});
    }

    const addProduct =(event)=>{
        event.preventDefault();
        // console.log(product);
        axios.put(`http://localhost:8888/products/${id}`,product).then(()=>{
            window.alert("PRODUCT UPDATED SUCCESSFULLY")
            nav("/maindashboard/crud")
        }).catch((error)=>{})
    }

    return (
        <div>
            <h2>THIS IS EditProductComp</h2>
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

export default EditProductComp
