import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {

    const navigate = useNavigate()
    const [inputValue, setInputValue] = useState({
        name: '',
        email: '',
        password: ''
    })
    const { name, email, password } = inputValue;

    const onChangeHandler = (e) => {
        setInputValue(() => {
            return {
                ...inputValue, [e.target.name]: e.target.value
            }
        })
    }

    useEffect(() => {
        const auth = localStorage.getItem("userData");
        if (auth) {
            navigate('/')
        }
    })

    const onSignUpHandler = async () => {

        let result = await fetch("http://localhost:5000/register", {
            method: "post",
            body: JSON.stringify(inputValue),
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
            <input name='name' className="inputBox" type="text" placeholder="Enter Name"
                value={name} onChange={onChangeHandler} />
            <input name='email' className="inputBox" type="text" placeholder="Enter Email"
                value={email} onChange={onChangeHandler} />
            <input name='password' className="inputBox" type="password" placeholder="Enter password"
                value={password} onChange={onChangeHandler} />
            <button onClick={onSignUpHandler} className="appButton" type="button">Sign Up</button>

        </div>
    )
}

export default SignUp