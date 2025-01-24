import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./src/Components/Body";
import Header from "./src/Components/Header/Header";
import 'bootstrap/dist/css/bootstrap.css';
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import About from "./src/Components/About";
import Contact from "./src/Components/Contact";
import ErrorPage from "./src/Components/ErrorPage";
// const heading = React.createElement(
//   "h1",
//   { id: "heading1" },
//   "Hello world in react app 🚀"
// );
// const jsxsyntax = <h1 className="heading"> "Hello world in react app 🚀"</h1>;
// const Header=()=>{
// return(
//     <div className="header">
//         <div className="logo">
//             <img alt="Food Logo" src={Logo} />
//             </div>
//             <div className="nav-items">
//                 <ul className="ul-list">
//                     <li>Home</li>
//                     <li>About Us</li>
//                     <li>Contact Us</li>
//                     <li>Cart</li>
//                 </ul>
//                 </div>
//         </div>    
// )
// }
// const RestroCardComp=()=>{
//     return(
//         <div className="restro-card">
// <img className="restro-img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/5a148e63e9c54942e37627da1aa156be"></img>
// <h4>Meghna Foods.</h4>
// <h5>Wow! Momo</h5>
// <h4>Tibetan,Healthy Food</h4>
// <h4>Sector 32</h4>
//             </div>
//     )
// }

const AppLayout=() => {
      return (
        <div className="app" id="root">
            <Header/>
            <Body/>
        </div>
    )
}
const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
          errorElement:<ErrorPage/>
    },
    {
        path:"/about",
        element:<About/> 
    },
    {
        path:"/contact",
        element:<Contact/> 
    }

])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
