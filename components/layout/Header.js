import React, { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/isOnline";

function Logo (){
  return(
<Link to="/">
<span className="italic text-3xl cursor-pointer underline decoration-[#FFA700]"> Food Fire </span>
</Link>
)
}

function MenuLinks() {
  const isOnline = useOnline()
  return (   
       <ul className="flex w-1/3 justify-around text-lg cursor-pointer">
          
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
        {isOnline ? '☑️' : '❌'}
       </ul>
       
  )
}
function LogInOut (){
    const [isLoggedIn, setIsLoggedIn] = useState(false)  
    return(
      <div>
      {isLoggedIn ? (<button className="rounded-md bg-[#FFA700] border px-3.5 py-1.5 text-base font-semibold leading-7"
      onClick={() => {setIsLoggedIn(false)}}>Log Out
      </button>) :
      (<button
        className="rounded-md bg-[#FFA700] border px-3.5 py-1.5 text-base font-semibold leading-7" onClick={() => {setIsLoggedIn(true)}}>
        Login
      </button>)}
      
      </div>
    )
}
function Header(){
  return(
    <nav className="flex justify-around pt-4 w-full">
      <Logo />
      <MenuLinks />
      <LogInOut />
    </nav>
  )
}
export default Header