import React from 'react'

const UserComp = (props) => {
    
    const {Uname} = props;

    if(Uname === "AMAN"){
        throw Error("NOT A USER")
    }

    return <p>CURRENT USER : <strong>{Uname}</strong></p>

}

export default UserComp
