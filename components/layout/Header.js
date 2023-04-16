import React, { useState } from "react";

function LoggedInUser(){
  return false
}
function Logo (){
  return(
<span style={{fontSize:"30px", fontStyle:"italic", textDecoration:"underline", textDecorationColor:"#ffa700"}}> Swiggy </span>)
}

function MenuLinks() {
  return (   
       <ul style={{display:"flex", justifyContent:"space-around",alignItems:"center", width:"30vw", listStyle:"none",fontSize:"20px"}}>
         <li>Offers</li>
         <li>Help</li>
         <li>Sign In</li>
         <li>Cart</li>
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