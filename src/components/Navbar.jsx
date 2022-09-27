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
            <ul className="nav-ul">
                <li><Link to='/'>Products</Link> </li>
                <li><Link to='/add'>Add Product</Link> </li>
                <li><Link to='/update'>Update Product</Link> </li>
                <li><Link to='/profile'>Profile</Link> </li>
                {/* <li><Link to='/login'>Login</Link> </li>
                <li>{auth ? <Link onClick={logout} to='/signup'>Logout</Link> :
                    <Link to='/signup'>SignUp</Link>} </li> */}

                {
                    auth ? <li><Link onClick={logout} to='/signup'>Logout</Link></li> :
                        <>
                            <li><Link to='/login'>Login</Link></li>
                            <li><Link to='/signup'>SignUp</Link></li>
                        </>
                }
            </ul>
        </div>
    )
}

export default Navbar;