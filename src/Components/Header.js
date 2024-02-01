import Logo from "../Assets/Images/the-red-cafe.png";
const Header=()=>{
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
                    </ul>
                    </div>
            </div>    
    )
}
export default Header;