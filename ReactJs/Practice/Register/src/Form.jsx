import React from "react";

function Form(props) {
    return (<>
        <form className="form">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="password" />
            {props.isRegisterd === false &&
                <input type="password" placeholder="password" />
            }
            <button type="submit">  {props.isRegisterd ? "Login" : "Register"} </button>

        </form>
    </>)
};

export default Form;