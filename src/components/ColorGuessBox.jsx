import React from 'react'

function ColorGuessBox(props) {
    return (
        <div className='p-3 bg-slate-600 text-white rounded shadow-md'>{props.hex || "Aan het laden.."}</div>

    )
}

export default ColorGuessBox