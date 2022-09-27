import React, { useState } from 'react'

const AddProduct = () => {

    const [inputValue, setInputValue] = useState({
        name: '',
        price: '',
        userId: JSON.parse(localStorage.getItem("userData"))._id,
        category: '',
        company: ''
    });
    const { name, price, userId, category, company } = inputValue;

    const [error, setError] = useState(false)

    const onChangeHandler = (e) => {
        setInputValue(() => {
            return {
                ...inputValue, [e.target.name]: e.target.value
            }
        })
    }

    const onSubmitHandler = async () => {

        if (!name || !price || !category || !company) {
            setError(true)
            return false;
        }

        let result = await fetch("http://localhost:5000/add-product", {
            method: "post",
            body: JSON.stringify(inputValue),
            headers: {
                "Content-Type": "application/json"
            }
        })
        result = await result.json()
        console.log(result)
    }

    return (
        <div className='form'>
            <h1>Add Product</h1>
            <input name='name' onChange={onChangeHandler} value={name} className='inputBox' type='text' placeholder='Product Name' />
            {error && !name ? <span className='invalidInput'>Enter Valid Name</span> : null}

            <input name='price' onChange={onChangeHandler} value={price} className='inputBox' type='number' placeholder='Product Price' />
            {error && !price ? <span className='invalidInput'>Enter Valid Price</span> : null}

            <input name='category' onChange={onChangeHandler} value={category} className='inputBox' type='text' placeholder='Product Category' />
            {error && !category ? <span className='invalidInput'>Enter Valid Category</span> : null}

            <input name='company' onChange={onChangeHandler} value={company} className='inputBox' type='text' placeholder='Product Company' />
            {error && !company ? <span className='invalidInput'>Enter Valid Company</span> : null}

            <button type='submit' onClick={onSubmitHandler} className='appButton'>Add Product</button>
        </div>
    )
}

export default AddProduct