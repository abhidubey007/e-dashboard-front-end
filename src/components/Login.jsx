import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate()

    useEffect(() => {
        const auth = localStorage.getItem("userData")
        if (auth) {
            navigate("/")
        }
    })

    const onloginHandler = async () => {
        let result = await fetch("http://localhost:5000/login", {
            method: "post",
            body: JSON.stringify({ email, password }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        result = await result.json()

        if (result.name) {
            localStorage.setItem("userData", JSON.stringify(result))
            navigate("/")
        } else {
            alert("Please enter correct Details")
        }
    }

    return (
        <div className='form'>
            <h1>Login</h1>
            <input className="inputBox" type="email" placeholder="User Email"
                value={email} onChange={(e) => setEmail(e.target.value)}
            />
            <input className="inputBox" type="password" placeholder='User Password'
                value={password} onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={onloginHandler} className="appButton" type="submit">Login</button>

        </div>
    )
}

export default Login