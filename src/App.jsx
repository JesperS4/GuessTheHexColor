import { useState, useEffect } from 'react'
import ColorGuessBox from './components/ColorGuessBox'
import CurrentColorBox from './components/CurrentColorBox'

function App() {

    const [colors, setColors] = useState([])
    const [correctColor, setCorrectColor] = useState("")

    useEffect(() => {
        let colorArray = []
        for (let i = 0; 3 > i; i++) {
            const randomColor = "#"+Math.floor(Math.random()*16777215).toString(16);
            colorArray.push(randomColor)
        }
        setCorrectColor(colorArray[Math.floor(Math.random() * colorArray.length)])
        setColors(colorArray)

    }, [])


    const restartGame = () => {
        let colorArray = []
        for (let i = 0; 3 > i; i++) {
            const randomColor = "#"+Math.floor(Math.random()*16777215).toString(16);
            colorArray.push(randomColor)
        }
        setCorrectColor(colorArray[Math.floor(Math.random() * colorArray.length)])
        setColors(colorArray)
    }
    

    return (
        <div id='container' className='w-full h-screen flex justify-center items-center'>
            <div className='w-2/3 flex flex-col items-center p-2 gap-4'>
                <CurrentColorBox color={correctColor} />

                <div className='font-bold'>Raad de kleur..</div>

                <div className='flex gap-3 justify-center'>
                    {
                        colors.map( value => (
                            <ColorGuessBox key={value} hex={value} correctColor={correctColor} restart={restartGame} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}


export default App
