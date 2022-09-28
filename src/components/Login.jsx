import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [inputValue, setInputValue] = useState({
        email: '',
        password: ''
    });
    const { email, password } = inputValue;

    const navigate = useNavigate()

    useEffect(() => {
        const auth = localStorage.getItem("userData")
        if (auth) {
            navigate("/")
        }
    })

    const onChangeHandler = (e) => {
        setInputValue(() => {
            return {
                ...inputValue, [e.target.name]: e.target.value
            }
        })
    }

    const onloginHandler = async () => {
        let result = await fetch("http://localhost:5000/login", {
            method: "post",
            body: JSON.stringify(inputValue),
            headers: {
                "Content-Type": "application/json"
            }
        })
        result = await result.json()

        if (result.auth) {
            localStorage.setItem("userData", JSON.stringify(result.user))
            localStorage.setItem("token", JSON.stringify(result.auth))
            navigate("/")
        } else {
            alert("Please enter correct Details")
        }
    }

    return (
        <div className='form'>
            <h1>Login</h1>
            <input className="inputBox" type="email" placeholder="User Email"
                name='email' value={email} onChange={onChangeHandler} autoComplete="off" />
            <input className="inputBox" type="password" placeholder='User Password'
                name='password' value={password} onChange={onChangeHandler}
            />
            <button onClick={onloginHandler} className="appButton" type="submit">Login</button>

        </div>
    )
}

export default Login