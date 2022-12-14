import React from 'react'

function CurrentColorBox(props) {
    console.log(props.color)
    return (
        <div style={{backgroundColor: props.color}} className={`w-2/3 h-24 rounded shadow-md`}></div>
    )
}

export default CurrentColorBox