import React, { useState } from 'react';

export default function TextForm(props) {
  // State variables
  const [text, setText] = useState('');

  // Event handlers
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
   props.showalert('Converted to Uppercase', 'success');
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
   props.showalert('Converted to Lowercase', 'success');
  };

  const handleClrLoClick = () => {
    let newText = '';
    setText(newText);
   props.showalert('Text cleared', 'success');
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy = (event) => {
    var text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
   props.showalert('Text copied to Clipboard', 'success');
  };

  const handleSpace = (event) => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(' '));
   props.showalert('Removed extra spaces', 'success');
  };

  return (
    < >
      <div className="container  " style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'#0b4c6a',color:props.mode==='light'?'black':'white'}} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Upper Case</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lower Case</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClrLoClick}>Clear</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleSpace}>Remove Extra Space</button>
      </div>
      <div className="container my-2" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008*text.split(/\s+/).filter((element)=>{return element.length!==0}).length} minutes to read. </p>
        <h2>Preview</h2>
        <div className="container" style={{border:'3px solid black'}} >
          <p>{text.length>0?text:"Nothing to preview."}</p>
        </div>
      </div>
    </>
  )
}
