import React, {useState} from "react";

export default  function TextForm(props){
    const [text, setText] = useState('');

    const handleOnChange = (event) =>{
        setText(event.target.value)
    }

    const handleOnClick = () =>{
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleOnlClick = () =>{
        let newText = text.toLowerCase();
        setText(newText)
    }

    return(
            <>
                <div className="container">
                    <div class="mb-3">
                        <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
                        <button className="btn btn-primary my-2" onClick={handleOnClick}>To Uppercase</button>
                        <button className="btn btn-primary my-2 mx-2" onClick={handleOnlClick}>To Lowercase</button>
                    </div>
                </div>

                    <h3>Text Summary</h3>
                    <div>
                        <p>{text.split(" ").length} and {text.length} Characters </p>
                        <p>{0.008 * text.split(" ").length}Time to Read</p>
                    </div>
                    <h4>Preview</h4>
                    <p>{text}</p>
                
            </>
    )
}