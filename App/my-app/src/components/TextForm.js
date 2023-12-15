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

    return(
        <div>
            <div class="mb-3">
                <textarea class="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
                <button className="btn btn-primary" onClick={handleOnClick}>To Uppercase</button>
            </div>
        </div>
    )
}