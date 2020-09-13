//DEPENDENCIES
import React from "react";
import "./style.css";

function InputFilter(props) {
    return (
        
        <form>
            <div className="form-group">
    
                <label htmlFor = "search"></label>
                <input
                    className="form-control"
                    //handle InputChange ----------- ON CHANGE 
                    onChange = {props.handleInputChange}
                    name = "search"
                    type="text"
                    placeholder = "Search First Name"
                    value = {props.vale}
                    id = "search"
                />
                <br></br>
                <button className="btn btn-info" onClick={props.handleFormSubmission}>Search</button>
                <button className = "btn btn-primary" onClick = {props.refreshPage}>Reset</button>
                <br />
            </div>
        </form>
    );
};

export default InputFilter;