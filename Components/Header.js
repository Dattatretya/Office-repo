import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

    

    const [login, setLogin ] = useState("Login")

    const HandleLogin = () =>{
        if (login=="Login"){
            setLogin("Logout")
        }
        else{
            setLogin("Login")
        }
    }

  return (
    <div className='header-container'>
    <div>
        <img className="header-img" src='https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?w=740&t=st=1706116624~exp=1706117224~hmac=a0da0df832c8972a01fd263ef6cbf0c830b57e49986483ab39f9caf3ff65e11a'/>
    </div>

    
    <ul>
        <Link to='/'><li>Home</li></Link>
        <Link to='/about'><li>About</li></Link>
        <Link to='/contact'><li>Contact Us</li></Link>
        <Link><li>Cart</li></Link>
    </ul>
   

    <button onClick={HandleLogin}>{login}</button>
    </div>
  )
}

export default Header