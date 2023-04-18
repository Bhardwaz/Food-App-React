import React, { useState } from "react";
import { Link } from "react-router-dom";

function Logo (){
  return(
<span style={{fontSize:"30px", fontStyle:"italic", fontWeight:"100", textDecoration:"underline", textDecorationColor:"#ffa700"}}> Swiggy </span>
)
}

function MenuLinks() {
  return (   
       <ul style={{display:"flex", justifyContent:"space-around",alignItems:"center", width:"30vw", listStyle:"none",fontSize:"20px"}}>

          <Link to="/">
          <li>Home</li>   
          </Link>
          
         <Link to="/help">
          <li>Help</li>
         </Link>

         <Link to="/about">
          <li>About</li>
          </Link>
          
          <Link to="/cart">
          <li>Cart</li>
          </Link>
       </ul>
  )
}
function LogInOut (){
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    return(
      <div className="btn-container">
      {isLoggedIn ? (<button 
      onClick={() => {setIsLoggedIn(false)}}>Log Out
      </button>) :
      (<button onClick={() => {setIsLoggedIn(true)}}>Log In</button>)}
      </div>
    )
}
function Header(){
  return(
    <nav className="navBar">
      <Logo />
      <MenuLinks />
      <LogInOut />
    </nav>
  )
}
export default Header