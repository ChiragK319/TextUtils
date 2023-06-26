import React,{useState}from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        //console.log("Uppercase  was clicked " + text);
        let newText= text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase","success")
    }
    const handleDownClick=()=>{
        //console.log("Uppercase  was clicked " + text);
        let newText= text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase","success")
    }
    const handleClearClick=()=>{
        //console.log("Uppercase  was clicked " + text);
        let newText="";
        setText(newText)
        props.showAlert("Cleared!","success")
    }
    const handleCapetalizedClick=()=>{
        //console.log("Uppercase  was clicked " + text);
        let newText=text.toCapetalizedCase();
        setText(newText)
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("The text is now read to you","success")
    }
    
    const handleCopy = ()=>{
        var text = document.getElementById("MyBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard","success")
    }
      
      <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
    const handleOnChange=(event)=>{
        //console.log("On Change");
        setText(event.target.value)
    }
    const [text, setText] = useState(); 
    return ( 
    <>
     <div className='container' style = {{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style = {{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} id="MyBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleDownClick}>Convert to lowercase</button> 
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button> 
        <button className="btn btn-primary mx-2" onClick={handleCapetalizedClick}>Capetalized</button> 
        <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy</button> 


     </div>
     <div className='container my-2' style = {{color:props.mode==='dark'?'white':'#042743'}}>
        <h2 >Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters </p>   
        <p>{0.008*text.split(" ").length} Minutes read</p>    
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview it here"}</p>
     </div>
    </>
   )
}
  