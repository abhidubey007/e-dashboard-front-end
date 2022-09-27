import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {

    const navigate = useNavigate()

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    useEffect(() => {
        const auth = localStorage.getItem("userData");
        if (auth) {
            navigate('/')
        }
    })

    const onSignUpHandler = async () => {

        let result = await fetch("http://localhost:5000/register", {
            method: "post",
            body: JSON.stringify({ name, email, password }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        result = await result.json()
        // console.log(result)
        localStorage.setItem("userData", JSON.stringify(result))
        navigate("/")
    }

    return (
        <div className='form'>
            <h1>Register</h1>
            <input className="inputBox" type="text" placeholder="Enter Name"
                value={name} onChange={(e) => setName(e.target.value)}
            />
            <input className="inputBox" type="text" placeholder="Enter Email"
                value={email} onChange={(e) => setEmail(e.target.value)}
            />
            <input className="inputBox" type="password" placeholder="Enter password"
                value={password} onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={onSignUpHandler} className="appButton" type="button">Sign Up</button>

        </div>
    )
}

export default SignUp