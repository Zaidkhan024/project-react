import React from 'react'

const MemoComp = (props) => {
    console.log(" this is memo comp");
    return (
        <div>
            <h2>This is MemoComp</h2>
            <p>{props.empName}</p>
        </div>
    )
}

// export default MemoComp
export default React.memo(MemoComp);
