import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const auth = localStorage.getItem("userData")
    const navigate = useNavigate()

    const logout = () => {
        navigate("/signup")
        localStorage.clear()
    }

    return (
        <div>
            <img src="logo.jpg" alt="DUBEY-COMM" className="logo" />
            {auth ?
                <ul className="nav-ul">
                    <li><Link to='/'>Products</Link> </li>
                    <li><Link to='/add'>Add Product</Link> </li>
                    <li><Link to='/profile'>Profile</Link> </li>
                    <li><Link onClick={logout} to='/signup'>Logout ({JSON.parse(auth).name})</Link></li>
                </ul>
                :
                <ul className="nav-ul nav-right">
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/signup'>SignUp</Link></li>
                </ul>
            }
        </div>
    )
}

export default Navbar;