import Logo from "../../Assets/Images/the-red-cafe.png";
import React from "react";
const Header=()=>{
    const[btnclck, setBtnclck]=React.useState("Login")
    return(
        <div className="header">
            <div className="logo">
                <img alt="Food Logo" src={Logo} />
                </div>
                <div className="nav-items">
                    <ul className="ul-list">
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Cart</li>
                        <button type="button" class="btn btn-light loginbtn" onClick={()=>btnclck==='Login'? setBtnclck('Logout'):setbtnclck('Login')}>{btnclck}</button>
                    </ul>
                    </div>
            </div>    
    )
}
export default Header;