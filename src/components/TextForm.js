import React from 'react'

export default function TextForm(props) {
  return (
        <div>
            <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="My box" rows="3"></textarea>
                </div>
            <button className="btn btn-primary"> Convert the Upperclass</button>
        </div>
    )
}
