import { useState, useEffect } from "react";
import { useParams } from 'react-router';
import React from "react";
import axios from "axios";
import './product.module.css';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'

function Product(){
        const {id}=useParams();

        const [items, setItems] = useState([]);
        const fetchItem = async () => {
        const response = await axios(`https://fakestoreapi.com/products/${id}`)
            setItems(response.data)
        }
        useEffect(() => {
          fetchItem();
         }); 


         return(
            <>
            <div className="p-5">
                <NavLink to={`/`}><button type="button" className="btn btn-secondary fs-4">Previous</button></NavLink>
            </div>
            <div className="d-flex justify-content-evenly">
                <div>
                    <img src={items.image} width="350px" alt="product" />
                </div>
                <div className="d-flex flex-column">
                    <p className="fs-4 fst-italic text-muted text-capitalize mb-0">{items.category}</p>
                    <p class="fs-2 fw-bold">{items.title}</p>
                    <span className="d-flex text-white p-1 rounded fs-4 bg-secondary">{items.rating && items.rating.rate}
                    &nbsp; <FontAwesomeIcon className="align-self-center" icon={faStar} /></span>
                    <p className="fs-1 fw-bold mt-3">${items.price}</p>
                    <p className="fs-5">{items.description}</p>
                    <button type="button" className="btn btn-dark fs-4 mt-3">Add to Cart</button>
                </div>
            </div>
                
            </>

         )
}

export default Product;