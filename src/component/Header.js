
import "../css/header.css";
import { useState , useEffect } from "react";
import logo from "../assets/download.png"


const Header = () => {

    const [themes , setThemes] = useState(JSON.parse(localStorage.getItem("themes")) || "");

   useEffect(() => {
    document.body.className = '';
    document.body.className = themes;
    localStorage.setItem("themes" , JSON.stringify(themes));
   })



    return (
        <div className="header"> 
            <span className="header_sub">
                <img className="header_logo" src={logo} alt="This is the logo" />
                <p className="header_title">TaskMate</p>
            </span>

            <div className="header_themes">
                <span onClick={() => setThemes("light")} className={`theme-selector  ${themes == 'light' ? "active light" : "light"}`}></span>  
                <span onClick={() => setThemes("medium")} className={`theme-selector  ${themes == 'medium' ? "active medium" : "medium"}`}></span>  
                <span onClick={() => setThemes("dark")} className={`theme-selector  ${themes == 'dark' ? "active dark" : "dark"}`}></span>  
                <span onClick={() => setThemes("g-1")} className={`theme-selector  ${themes == 'g-1' ? "active g-1" : "g-1"}`}></span>  
                <span onClick={() => setThemes("g-2")} className={`theme-selector  ${themes == 'g-2' ? "active g-2" : "light"}`}></span>  
                <span onClick={() => setThemes("g-3")} className={`theme-selector  ${themes == 'g-3' ? "active g-3" : "g-3"}`}></span>  
                 
            </div>
        </div>
    )
}

export default Header; 