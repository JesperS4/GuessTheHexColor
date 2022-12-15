import React from 'react'

function CurrentColorBox(props) {
    return (
        <div style={{backgroundColor: props.color}} className={`w-2/3 h-24 rounded shadow-md`}></div>
    )
}

export default CurrentColorBox