import React, { useState } from 'react';


export default function TextForm(props) {
    const handleUpClick = () => {
       // console.log("UpperCase Coverted" + text);
        let newText = text.toUpperCase();
        setText(newText);
    };
    const handleLoClick = () => {
        // console.log("UpperCase Coverted" + text);
         let newText = text.toLowerCase();
         setText(newText);
     };
    const handleClearClick = () => {
         let newText = ('');
         setText(newText);
     };
    const HandleOnChange = (event) => {
        //console.log("On change the text");
        setText(event.target.value);
    };
    const [text, setText] = useState('Enter text here');
    // setText=("new test"); // write ways to corrections
    return (
        <>
            <div className='container'>
                <h1>{props.heading}  </h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={HandleOnChange} id="My box" rows="3"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}> Convert the Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}> Convert the lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}> Clear Text</button>
            </div>
            <div className="container my-3">
                <h2>Summary</h2>
                <p> {text.split(" ").length} words and {text.length}characters</p>
                <p> {0.008*text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    );
}
