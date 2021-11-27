import React from 'react'
import { useState } from 'react'
export default function TextForm(props) {
    const [data, setData] = useState("Enter your text here");
    const Upper = () => {
        setData(data.toUpperCase())
        props.alert("Converted to upperCase","success")
    }
    const Lower = () => {
        setData(data.toLowerCase())
        props.alert("Converted to lowerCase","success")
    }
    const Clear = () => {
        setData('')
        props.alert("Text is Cleared","success")
    }
    const Trim = () => {
        setData(data.trim())
        props.alert("Text is trimed","success")
    }

    const Copy = () => {
        var text = document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value);
        props.alert("Text is copied","Success")
    }
    const Spaceremove = () => {
        let newText = data.split(/[ ]+/);
        setData(newText.join(" "));
        props.alert("Space has been removed","Success")
    }
    const Proper = () => {
        const arr = data.split(".");
        for (var i = 0; i < arr.length; i++)
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1, arr[i].length);
        const txt = arr.join(".");
        setData(txt)
        props.alert("Text is proper","Success")
    }
    return (
        <>
            <div>
                <div class="mb-3" style={{color:props.mode==='dark'?'white':'black'}}>
                    <h1>{props.head}</h1>
                    <textarea class="form-control" id="myBox" rows="11" style={{backgroundColor:props.mode==='dark'?'grey':'white'}} value={data} onChange={(e) => setData(e.target.value)}></textarea>
                    <button type="button" class="btn btn-primary mx-2" onClick={Upper}>Convert to upperCase</button>
                    <button type="button" class="btn btn-warning mx-2" onClick={Lower}>Convert to lowerCase</button>
                    <button type="button" class="btn btn-danger mx-2" onClick={Clear}>Clear Text</button>
                    <button type="button" class="btn btn-success mx-2" onClick={Trim}>Trim Text</button>
                    <button type="button" class="btn btn-secondary mx-2" onClick={Copy}>Copy Text</button>
                    <button type="button" class="btn btn-dark mx-2" onClick={Spaceremove}>Remove Space</button>
                    <button type="button" class="btn btn-light mx-2" onClick={Proper}>Make proper</button>
                </div>
            </div>
            <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
                <h1>Tour paragraph Analyzer</h1>
                <p>Your paragraph has {data.length} charecters and {data.split(" ").filter(function(n){return n!=''}).length} words</p>
                <p>Total time to read the paragraph {data.length * 0.008}</p>
                <h1>Your text preview</h1>
                <p >{data.length > 0 ? data : "Enter Something to preview"}</p>
            </div>
        </>
    )
}
