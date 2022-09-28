import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const UpdateProduct = () => {

    const { id } = useParams()

    const navigate = useNavigate()

    const [inputValue, setInputValue] = useState({
        name: '',
        price: '',
        userId: '',
        category: '',
        company: ''
    })
    const { name, price, userId, category, company } = inputValue;

    useEffect(() => {
        getProductDetails()
    }, [])

    const getProductDetails = async () => {
        let result = await fetch(`http://localhost:5000/product/${id}`)
        result = await result.json()
        setInputValue(result)
    }

    const onChangeHandler = (e) => {
        setInputValue(() => {
            return {
                ...inputValue, [e.target.name]: e.target.value
            }
        })
    }

    const updateProduct = async () => {
        let result = await fetch(`http://localhost:5000/product/${id}`, {
            method: 'put',
            body: JSON.stringify(inputValue),
            headers: {
                'Content-Type': 'Application/json'
            }
        });
        result = await result.json();
        if (result) {
            navigate('/')
        }

    }

    return (
        <div className='form'>
            <h1>Update Product</h1>
            <input name='name' onChange={onChangeHandler} value={name} className='inputBox' type='text' placeholder='Product Name' />

            <input name='price' onChange={onChangeHandler} value={price} className='inputBox' type='number' placeholder='Product Price' />

            <input name='category' onChange={onChangeHandler} value={category} className='inputBox' type='text' placeholder='Product Category' />

            <input name='company' onChange={onChangeHandler} value={company} className='inputBox' type='text' placeholder='Product Company' />

            <button type='button' onClick={updateProduct} className='appButton'>Update</button>
        </div>
    )
}

export default UpdateProduct