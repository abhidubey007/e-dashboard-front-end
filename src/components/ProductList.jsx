import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const ProductList = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = async () => {
        let result = await fetch("http://localhost:5000/products", {
            headers: {
                authorization: JSON.parse(localStorage.getItem("token"))
            }
        })
        result = await result.json()
        setProducts(result)
    }

    const deleteProduct = async (id) => {
        let result = await fetch(`http://localhost:5000/product/${id}`, {
            method: "delete"
        })
        result = await result.json()

        if (result) {
            getProducts()
        }
    }

    const searchHandler = async (e) => {
        let key = e.target.value
        if (key) {
            let result = await fetch(`http://localhost:5000/search/${key}`)
            result = await result.json()
            if (result) {
                setProducts(result)
            }
        }
        else {
            getProducts()
        }
    }

    return (
        <div className='form'>
            <h1>Product List</h1>
            <input onChange={searchHandler} className='search-product-box' type="text" placeholder='Search Product' />
            {
                products.length > 0 ?
                    <table>
                        <thead>
                            <tr>
                                <th>S.N.</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Brand</th>
                                <th>Category</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {
                            products.map((item, index) => {
                                return (
                                    <tbody key={item._id}>
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{item.name}</td>
                                            <td>{item.price}</td>
                                            <td>{item.company}</td>
                                            <td>{item.category}</td>
                                            <td>
                                                <button><Link to={`/update/${item._id}`}>Update</Link></button>
                                                <button onClick={() => deleteProduct(item._id)}>Delete</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                )
                            })
                        }
                    </table>
                    : <h1>No Result Found</h1>
            }
        </div>
    )
}

export default ProductList