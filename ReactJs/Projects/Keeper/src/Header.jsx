import React from "react";

const customStyle = {
    backgroundColor: "yellow",
    marging: "auto -16px",
    boxShadow: "0 0 10px 0 rgba(0,0,0,0.3)"
}
function Header() {
    return (<>
        <header>
            <h1 style={customStyle}>Keeper</h1>
        </header>
    </>)
}
export default Header;