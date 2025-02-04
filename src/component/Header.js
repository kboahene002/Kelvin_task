
import "../css/header.css";
import logo from "../assets/download.png"
const Header = () => {
    return (
        <div className="header"> 
            <span className="header_sub">
                <img className="header_logo" src={logo} alt="This is the logo" />
                <p className="header_title">TaskMate</p>
            </span>

            <div className="header_themes">
                <span className="theme-selector light"></span>  
                <span className="theme-selector medium"></span>  
                <span className="theme-selector dark"></span>  
                <span className="theme-selector g-1"></span>  
                <span className="theme-selector g-2"></span>  
                <span className="theme-selector g-3"></span>  
                 
            </div>
        </div>
    )
}

export default Header; 