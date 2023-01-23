import React from "react"
import logo from "../images/ReactSmall.png"
export default function Navbar() {
    return (
        <nav>
            <img src={logo} alt=""  className="logo-react"/>
            <h3 className="nav-head">ReactFacts</h3>
            <h4 className="nav-title">Project-1</h4>
        </nav>
    )
}