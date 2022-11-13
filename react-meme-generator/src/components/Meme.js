import React from 'react';

export default function Meme(){

    const handleClick = () => console.log("Clicked.");

    const handleOnMouseOver = () => console.log("Mouse Over.");

    return (
        <main>
            <div className='form'>
                <input type='text' placeholder='Top text'/>
                <input type='text' placeholder='Bottom text'/>
                <button onClick={handleClick} onMouseOver={handleOnMouseOver}>Generate Meme</button>
            </div>
        </main>
    )
}