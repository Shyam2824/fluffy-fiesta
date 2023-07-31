import React, {useState} from 'react'

export default function TextForm(props) {
    const handdleit= ()=>{
        console.log("UpperCase Coverted" + text);
        let newtext= text.toUpperCase();
        setText(newtext)
    }
    const HanddleOnChange= (event)=>{
        console.log("On change the text");
        setText(event.target.value)
    }
    const [text, setText] = useState('Enter text here');
  return (
        <div>
            <h1>{props.heading}  </h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={HanddleOnChange} id="My box" rows="3"></textarea>
                </div>
            <button className="btn btn-primary" onClick={handdleit}> Convert the Upperclass</button>
        </div>
    )
}
