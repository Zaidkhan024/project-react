const MethodAndEventComp =()=> {
    const greeting =()=>{
        window.alert("GOOD MORNING");
    }
    const welcome =(...std)=>{
        window.alert(`WELCOME YOU ${std}`);
    }
    return <div> 
    <h2>THIS IS METHOD-AND-EVENT-COMP</h2>
    <button type="button" onClick={()=>greeting()}>CLICK</button>
    <button type="button" onClick={()=>welcome("ZAID")}>CLICK AGAIN</button>
    {/* <h2 onMouseOver={()=>welcome("ADITYA" , "JUNAID" , "YASH-KOHLE")}>HOVER ON ME</h2> */}
    </div>
}
export default MethodAndEventComp;