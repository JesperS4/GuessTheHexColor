import React from 'react'

function ColorGuessBox(props) {

    const isColorCorrect = () => {
        if (props.hex == props.correctColor) {
            console.log('correct')
        }
    }

    return (
        <div className='p-3 bg-slate-600 text-white rounded shadow-md' onClick={() => isColorCorrect()}>{props.hex || "Aan het laden.."}</div>

    )
}

export default ColorGuessBox