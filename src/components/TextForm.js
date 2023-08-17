import React ,{useState} from "react";

export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("Uppercase was clicked"+text);
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLoClick=()=>{
        // console.log("Uppercase was clicked"+text);
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowerercase!", "success");
    }

    const handleCopyClick=()=>{
        // console.log("I am copy");
        var text =document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied sucessully!", "success")
    }

    const handleExtraSpace=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed extra space sucessully!", "success")
    }

    const handleClearClick=()=>{
        // console.log("Uppercase was clicked"+text);
        let newText=' ';
        setText(newText)
        props.showAlert("Clear all text sucessfully!", "success")
    }

    const handleOnChange=(event)=>{
        // console.log("On change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    // text="new text" //wrong way to set text
    // setText("new text") //correct way to set text
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} id="myBox"rows="10"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Conver To UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Conver To LowerCase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove Space</button>
    </div>

    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minute to read the word</p>
        <h2>Privew</h2>
        <p>{text.length>0?text:"Enter some text to preview it here"}</p>
    </div>
    </>
  );
}
