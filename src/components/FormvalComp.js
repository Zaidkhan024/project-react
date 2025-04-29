import React, { useState } from 'react'
// import "./external.css"
import VisibilityIcon from '@mui/icons-material/Visibility';

const FormvalComp = () => {
    let myCourses = ["REACT","ANGULAR","PYTHON","JAVA","NODEJS"]
    let myGender = ["MALE","FEMALE","TRANSGENDER"]
    const [person , setPerson] = useState({
        fname : "",
        lname : "",
        contact: "",
        emailid: "",
        password:"",
        courses : "",
        gender : "",
        term:false
    });
    const inputChangeHandler = (event) => {
        // console.log(event.target.type);
        // console.log(event.target.name);
        // console.log(event.target.value);
        const {type, name, value} = event.target;
        setPerson({...person,[name]:value});
    }
    const checkData = (event) => {
        
        event.preventDefault(); 

        let regName = "^[a-zA-Z]{2,15}$";
        let regNum = "^[0-9]{10}$";

        if(person.fname.trim() === ""){
            window.alert("FIRST NAME IS REQUIRED !!")
            return false;
        }
        if(person.lname.trim() === ""){
            window.alert("LAST NAME IS REQUIRED !!")
            return false;
        }
        if(!person.fname.trim().match(regName)){
            window.alert("FIRST NAME MUST CONTAIN ONLY CHARACTER AN NAME MUST BE 2-15 CHARACTER !!")
            return false;
        }
        if(!person.lname.trim().match(regName)){
            window.alert("LAST NAME MUST CONTAIN ONLY CHARACTER AN NAME MUST BE 2-15 CHARACTER !!")
            return false;
        }
        if(person.contact.trim() === ""){
            window.alert("CONTACT NUMBER IS REQUIRED !!")
            return false;
        }
        if(!person.contact.trim().match(regNum)){
            window.alert("CONTACT NUMBER CONTAINS ONLY 10 NUMBERS")
            return false;
        }
        if(person.courses === ""){
            window.alert("SELECT YOUR COURSE !!")
            return false;
        }
        if(person.emailid === ""){
            window.alert("EMAIL-ID IS REQUIRED !!")
            return false;
        }
        if(person.password === ""){
            window.alert("PASSWORD IS REQUIRED !!")
            return false;
        }
        if(person.gender === ""){
            window.alert("SELECT YOUR GENDER !!")
            return false;
        }
        if(person.term === false){
            window.alert("ACCEPT TERMS AND CONDITION !!")
            return false;
        }
        window.alert(JSON.stringify(person));
    }
    
    let isCond=false;
    const showHidePass = ()=>{
        isCond = !isCond;
        if(isCond){
              document.getElementById("passid").type="text";
        }else{
            document.getElementById("passid").type="password";
        }
    }
    
    return (
        <div>
            <h2>THIS IS FORM VALIDATION COMPONENT</h2>
            <form onSubmit={checkData} className='myform'>
                <div>
                    <label>ENTER YOUR FIRST NAME : </label>
                    <input type='text' name='fname' onChange={inputChangeHandler} value={person.fname} placeholder='ENTER FIRST NAME'></input>
                </div>
                <br/>
                <div>
                    <label>ENTER YOUR LAST NAME : </label>
                    <input type='text' name='lname' onChange={inputChangeHandler} value={person.lname} placeholder='ENTER LAST NAME'></input>
                </div>
                <br/>
                <div>
                    <label>ENTER YOUR CONTACT NUMBER : </label>
                    <input type='tel' name='contact' onChange={inputChangeHandler} value={person.contact} placeholder='ENTER CONTACT NUMBER'></input>
                </div>
                <br/>
                <div>
                    <label>ENTER YOUR EMAIL-ID : </label>
                    <input type='email' name='emailid' onChange={inputChangeHandler} value={person.emailid} placeholder='ENTER EMAIL-ID'></input>
                </div>
                <br/>
                <div>
                    <label>ENTER YOUR PASSWORD : </label>
                    <input type='password' name='password' id="passid" onChange={inputChangeHandler} value={person.password} placeholder='ENTER PASSWORD' />
                    <span onClick={()=>showHidePass()}>
                        <VisibilityIcon></VisibilityIcon>
                    </span>
                </div>
                <br/>
                <div>
                    <label>SELECT YOUR COURSE : </label>
                    <select name='courses' onChange={inputChangeHandler}>
                        <option value="">SELECT YOUR COURSES</option>
                        {
                            myCourses.map((val,index)=>{
                                return <option value={val} key={index}>{val}</option>
                            })
                        }
                    </select>
                </div>
                <br/>
                <div>
                    <label>GENDER : </label>
                    <select name='gender' onChange={inputChangeHandler}>
                        <option value="">GENDER</option>
                        {
                            myGender.map((val,index)=>{
                                return <option value={val} key={index}>{val}</option>
                            })
                        }
                    </select>
                </div>
                <br/>
                <div id='termsandcond'>
                    <h3>TERMS & CONDITION -</h3>
                    <p>----------------------------------------------------------------------------------------------------</p>
                    <p>
                    Registration and fees for courses must be completed as outlined, with changes subject to our posted policies. Your privacy is important to us, and data use is governed by our Privacy Policy. Cancellations are permitted within 10 days for a full refund; fees may apply afterward. 
                    </p>
                </div>
                
                <div>
                    <input type='checkbox' name='term' onChange={inputChangeHandler}></input>
                    <label>I AGREED WITH ALL TERMS AND CONDITIONS</label>
                </div>
                <br/>
                <button type='submit' className='btn btn-primary'>SUBMIT</button>
            </form>
        </div>
    )
}

export default FormvalComp