import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log("Uppercase clicked")
        let newText = text.toUpperCase()
        setText(newText)
    }
    const handleLoClick = () => {
        // console.log("Uppercase clicked")
        let newText = text.toLowerCase()
        setText(newText)
    }
    const uppercaseFirstIndex = () => {
        const words = text.split(' ');
        const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
        setText(capitalizedWords.join(' '));
    };
    const clearText = () => {
        let newText = ""
        setText(newText)
    };

    const copyText = () => {
        let newText = document.getElementById("myBox")
        newText.select()
        navigator.clipboard.writeText(newText.value)

    }

    const removeExtraSpaces = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
    }

    const handleOnChange = (event) => {
        // console.log("on change")
        setText(event.target.value)
    }
    const [text, setText] = useState('Enter text here')
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#343a40' }}>
                <div className="mb-3">
                    <h1 className='text-center my-3'>{props.heading}</h1>
                    <textarea className="form-control"
                        onChange={handleOnChange} id="myBox" rows="10" value={text}
                        style={{ color: props.mode === 'dark' ? 'white' : '#343a40', backgroundColor: props.mode === 'light' ? 'white ' : '#343a40' }}></textarea>
                </div>
                <div className='text-center'>
                    <button className='btn   m-2' onClick={handleUpClick} style={{ color: props.mode === 'dark' ? 'white' : '#343a40', backgroundColor: props.mode === 'light' ? 'white ' : '#343a40', border: props.mode === 'dark' ? '2px solid white' : '2px solid blue' }}>Convert to Uppercase</button>

                    <button className='btn   m-2' onClick={handleLoClick} style={{ color: props.mode === 'dark' ? 'white' : '#343a40', backgroundColor: props.mode === 'light' ? 'white ' : '#343a40', border: props.mode === 'dark' ? '2px solid white' : '2px solid blue' }}>Convert to Lowercase</button>

                    <button className='btn   m-2' onClick={uppercaseFirstIndex} style={{ color: props.mode === 'dark' ? 'white' : '#343a40', backgroundColor: props.mode === 'light' ? 'white ' : '#343a40', border: props.mode === 'dark' ? '2px solid white' : '2px solid blue' }}>Convert to Camel case</button>

                    <button className='btn   m-2' onClick={clearText} style={{ color: props.mode === 'dark' ? 'white' : '#343a40', backgroundColor: props.mode === 'light' ? 'white ' : '#343a40', border: props.mode === 'dark' ? '2px solid white' : '2px solid blue' }}>Clear Text</button>

                    <button className='btn   m-2' onClick={copyText} style={{ color: props.mode === 'dark' ? 'white' : '#343a40', backgroundColor: props.mode === 'light' ? 'white ' : '#343a40', border: props.mode === 'dark' ? '2px solid white' : '2px solid blue' }}>Copy Text</button>

                    <button className='btn   m-2' onClick={removeExtraSpaces} style={{ color: props.mode === 'dark' ? 'white' : '#343a40', backgroundColor: props.mode === 'light' ? 'white ' : '#343a40', border: props.mode === 'dark' ? '2px solid white' : '2px solid blue' }}>Remove Extra Spaces</button>
                </div>
            </div>
            <div className="container my-3">
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} words and {text.trim().length} character</p>
                <p>{0.04 * text.split(" ").length} Minutes read</p>
            </div>
        </>
    )
}
