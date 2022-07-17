import { useState, useEffect } from "react";
import React from "react";
import './ProductList.css';
import axios from "axios";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import banner from './s4.png'

function ProductList()
{
    const linkStyle={
        color: "#000000",
        textDecoration:"none"
    }
    

    const [items, setItems] = useState([]);
    const fetchItem = async () => {
    const response = await axios(`https://fakestoreapi.com/products`)
        setItems(response.data)
    }
    useEffect(() => {
      fetchItem();
     }, []); 
    return(
        <>
            <div>
                <img src={banner} alt="banner" width="100%" />
            </div>
            <h1 className="p-5 text-center">Products</h1>
            <div className="d-flex justify-content-center align-items-center flex-wrap">
            {items.map((product) =>{
                    return(
                        <NavLink to={`/product/${product.id}`} style={linkStyle}>
                            <div className="d-flex flex-column p-5 m-5 product-list">
                                <img src={product.image} className="align-self-center" alt="item" width="200px" height="200px" />
                                <p className="fs-4 fw-bold pt-3 pb-3 product-title">{product.title}</p>
                                <span className="fs-5 fw-bold">${product.price}</span>
                                <span className="d-flex mt-3 fs-6 rounded rating"> {product.rating.rate}&nbsp;
                                <FontAwesomeIcon className="align-self-center" icon={faStar} />&nbsp;|{product.rating.count}</span>
                            </div>
                    </NavLink>
                    )
                    })}
            </div>
        </>
    )
}
export default ProductList;