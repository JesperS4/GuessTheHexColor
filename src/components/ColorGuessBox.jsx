import React from 'react'

let hasAlreadyPressed = false;

function ColorGuessBox(props) {
    const [currentColor, setCurrentColor] = React.useState('#080808')
    const isColorCorrect = () => {
        if (hasAlreadyPressed) return;
        hasAlreadyPressed = true

        if (props.hex == props.correctColor) {
            setCurrentColor('#1F9B22')
        } else {
            setCurrentColor('#A61D0E')
        }

        setTimeout( () => {
            hasAlreadyPressed = false
            props.restart()
        }, 350)
    }

    return (
        <div style={{backgroundColor: currentColor}} className={`p-3 text-white rounded shadow-md cursor-pointer`} onClick={() => isColorCorrect()}>{props.hex || "Aan het laden.."}</div>

    )
}

export default ColorGuessBox